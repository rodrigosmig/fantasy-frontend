import {
  Box,
  Flex,
  Tbody,
  VStack
} from "@chakra-ui/react";
import { NextPage } from "next";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useSession } from "../components/Contexts/AuthContext";
import { usePosicao } from "../components/Contexts/PositionContext";
import { JogadoresItem } from "../compositions/JogadoresItem/JogadoresItem";
import { Layout } from "../compositions/Layout/Layout";
import { Loading } from "../components/Loading/Loading";
import { FiltrarJogador } from "../compositions/FiltrarJogador/FiltrarJogador";
import { Select } from "../components/Select/Select";
import { JogadoresSkeleton } from "../components/Skeleton/JogadoresSkeleton";
import { Table } from "../components/Table/Table";
import { useTime } from "../hooks/useTime";
import { paisService } from "../services/apiService/paisService";
import { IPais, IPaisForm } from "../types/pais";
import { useJogadores } from "../hooks/useJogadores";
import { Pagination } from "../compositions/Pagination/Pagination";
import { Input } from "../components/Input/Input";
import { useCallback } from "react";

const Transfer: NextPage = () => {
  const { user } = useSession();
  const { posicoesForm, isLoadingPosicoes } = usePosicao();
  const { isLoading: isLoadingTime } = useTime();
  const [paises, setPaises] = useState<IPaisForm[]>([])
  const [isLoadingPaises, setIsLoadingPaises] = useState(true);
  const [paisJogador, setPaisJogador] = useState<number>(0);
  const [posicaoJogador, setPosicaoJogador] = useState<number>(0);
  const [nomeJogador, setNomeJogador] = useState("");
  const [page, setPage] = useState(0);


  const { data, isLoading: isLoadingJogadores } = useJogadores(paisJogador, posicaoJogador, nomeJogador, page);

  const theadData = [
    "Adicionar",
    "Jogador",
    "Pontos",
  ];

  const getPaises = async () => {
    const response = await paisService.getPaises();

    const primeiroItem = [{
      value: 0,
      label: "Selecione"
    }]
    
    const paisesForm = response.data.map(pais => {
      return {
        value: pais.id,
        label: pais.nome
      }
    })
    
    setPaises([
      ...primeiroItem,
      ...paisesForm
    ]);
    setIsLoadingPaises(false)
  }

  const isLoading = () => {
    return isLoadingPaises || isLoadingPosicoes || isLoadingTime;
  }

  const isEmpty = () => {
    return data?.content ? data?.content.length === 0 : false;
  }

  useEffect(() => {
    getPaises()
  }, [user]);

  const handleSelectCountry = (event: ChangeEvent<HTMLSelectElement>) => {
    const idPais = parseInt(event.target.value);
    setPaisJogador(idPais);
  }

  const handleSelectPosition = (event: ChangeEvent<HTMLSelectElement>) => {
    const idPosicao = parseInt(event.target.value);
    setPosicaoJogador(idPosicao);
  }

  const handleChangeName = (nomeJogador: string) => {
    setNomeJogador(nomeJogador);
  }

  const handleChangePage = useCallback((page: number) => {
    console.log("change page:", page)
    setPage(page);
  }, [])

  return (
    <Layout>
      <Flex
        direction={"column"}
        alignItems={["center"]}
        width="full"
        height={"full"}
        mt="1.8rem"
      >
        <Flex
          direction={"column"}
          alignItems={["center"]}
          width="full"
          height={["500px"]}
        >
          <Box
            width={"95%"}
            mb="4"
          >
            { isLoading() && <JogadoresSkeleton /> }

            { !isLoading() && (
              <>
                <VStack spacing={[3]}>
                  <Select
                    options={paises}
                    inputName='pais'
                    label='País'
                    borderRadius={0}
                    onChange={handleSelectCountry}
                  />

                  <Select
                    options={posicoesForm}
                    inputName='formacao'
                    label='Posição'
                    borderRadius={0}
                    onChange={handleSelectPosition}
                  />

                  <Input
                    borderRadius={0}
                    label={"Nome do Jogador"}
                    inputName="NomeJogador" 
                    placeholder="Nome do Jogador"
                    onChange={(event) => handleChangeName(event.target.value)}
                  />
                </VStack>

                { isLoadingJogadores && <Loading /> }

                { !isLoadingJogadores && (
                  <>
                    <Table
                  isEmpty={isEmpty()}
                  theadData={theadData}
                  size={"sm"}
                  mt={4}
                >
                  <Tbody textAlign={"center"}>
                    { !isLoadingJogadores && (
                      data?.content.map(jogador => <JogadoresItem key={jogador.id} jogador={jogador}/>)
                    )}
                  </Tbody>
                </Table>

                { !isEmpty() && (
                  <Pagination 
                    from={0}
                    to={10}
                    lastPage={data?.totalPages ? data.totalPages : 0}
                    totalRegisters={data?.totalElements ? data?.totalElements : 0}
                    currentPage={data?.number ? data?.number + 1 : 1}
                    onPageChange={handleChangePage}
                  />

                )}
                  </>
                ) }

                

              </>
            )}

            
            
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
};

export default Transfer;