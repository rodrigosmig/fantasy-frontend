import {
  Box,
  Flex,
  Tbody,
  VStack
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSession } from "../components/Contexts/AuthContext";
import { usePosicao } from "../components/Contexts/PositionContext";
import { JogadoresItem } from "../compositions/JogadoresItem/JogadoresItem";
import { Layout } from "../compositions/Layout/Layout";
import { Loading } from "../components/Loading/Loading";
import { SearchPlayer } from "../compositions/SearchPlayer/SearchPlayer";
import { Select } from "../components/Select/Select";
import { JogadoresSkeleton } from "../components/Skeleton/JogadoresSkeleton";
import { Table } from "../components/Table/Table";
import { useTime } from "../hooks/useTime";
import { paisService } from "../services/apiService/paisService";
import { IPais, IPaisForm } from "../types/pais";
import { useJogadores } from "../hooks/useJogadores";
import { Pagination } from "../compositions/Pagination/Pagination";

const Transfer: NextPage = () => {
  const { user } = useSession();
  const { posicoesForm, isLoadingPosicoes } = usePosicao();
  const { isLoading: isLoadingTime } = useTime();
  const [paises, setPaises] = useState<IPaisForm[]>([])
  const [isLoadingPaises, setIsLoadingPaises] = useState(true);
  const [paisJogador, setPaisJogador] = useState("");
  const [posicaoJogador, setPosicaoJogador] = useState("");
  const [nomeJogador, setNomeJogador] = useState("");


  const { data: jogadores, isLoading: isLoadingJogadores } = useJogadores(paisJogador, posicaoJogador, nomeJogador);
  console.log(jogadores)

  const theadData = [
    "Info",
    "Jogador",
    "Pontos",
    ""
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

  useEffect(() => {
    getPaises()
  }, [user]);

  const handleChangePage = (page: number) => {
  
  }

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
                  />

                  <Select
                    options={posicoesForm}
                    inputName='formacao'
                    label='Posição'
                    borderRadius={0}
                  />
                </VStack>

                <SearchPlayer />            

                <Table
                  isEmpty={false}
                  theadData={theadData}
                  size={"sm"}
                  mt={4}
                >
                  <Tbody textAlign={"center"}>
                    { !isLoadingJogadores && (
                      jogadores?.content.map(jogador => <JogadoresItem jogador={jogador}/>)
                    )}
                  </Tbody>
                </Table>
              </>
            )}

            <Pagination 
              from={0}
              to={10}
              lastPage={3}
              totalRegisters={24}
              currentPage={1}
              onPageChange={handleChangePage}
            />
            
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
};

export default Transfer;