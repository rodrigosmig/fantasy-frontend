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
import { JogadoresItemTable } from "../components/JogadoresItemTable/JogadoresItemTable";
import { Layout } from "../components/Layout/Layout";
import { Loading } from "../components/Loading/Loading";
import { SearchPlayer } from "../components/SearchPlayer/SearchPlayer";
import { Select } from "../components/Select/Select";
import { JogadoresSkeleton } from "../components/Skeleton/JogadoresSkeleton";
import { Table } from "../components/Table/Table";
import { useTime } from "../hooks/useTime";
import { paisService } from "../services/apiService/paisService";
import { IPais, IPaisForm } from "../types/pais";

const Transfer: NextPage = () => {
  const { user } = useSession();
  const { posicoesForm, isLoadingPosicoes } = usePosicao();
  const { isLoading: isLoadingTime } = useTime();

  const [paises, setPaises] = useState<IPaisForm[]>([])
  const [isLoadingPaises, setIsLoadingPaises] = useState(true);

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
  }, [user])

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
                    <JogadoresItemTable />
                  </Tbody>
                </Table>
              </>
            )}
            
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
};

export default Transfer;