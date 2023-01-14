import { 
  Box, 
  Flex, 
  VStack 
} from "@chakra-ui/react";
import { Layout } from "compositions/Layout";
import { Input } from "elements/Input";
import { Select } from "elements/Select";
import { PlayersSkeleton } from "elements/Skeleton/PlayersSkeleton";
import { useSelector } from "hooks/useSelector";
import { NextPage } from "next";
import { Country } from "types/country";
import { Position } from "types/position";

const Transfer: NextPage = () => {
  const { isLoading, paises, posicoes } = useSelector(({appData}) => appData);

  const getPaises = (paises: Country[]) => {
    const firstItem = [{
      value: 0,
      label: "Selecione"
    }]
  
    const countriesForm = paises.map(country => {
      return {
        value: country.id,
        label: country.nome
      }
    })

    return [
      ...firstItem,
      ...countriesForm
    ];      
  }

  const getPositions = (positions: Position[]) => {
    const firstItem = [{
      value: 0,
      label: "Selecione"
    }]
  
    const countriesForm = positions.map(position => {
      return {
        value: position.id,
        label: position.nome
      }
    })

    return [
      ...firstItem,
      ...countriesForm
    ];      
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
            { isLoading && <PlayersSkeleton /> }

            { !isLoading && (
              <>
                <VStack spacing={[3]}>
                  <Select
                    options={getPaises(paises)}
                    inputName='pais'
                    label='País'
                    borderRadius={0}
                    _focus={{
                      borderColor: "pink.500",
                    }}
                    //onChange={handleSelectCountry}
                  />

                  <Select
                    options={getPositions(posicoes)}
                    inputName='formacao'
                    label='Posição'
                    borderRadius={0}
                    _focus={{
                      borderColor: "pink.500",
                    }}
                    //onChange={handleSelectPosition}
                  />

                  <Input
                    borderRadius={0}
                    label={"Nome do Jogador"}
                    inputName="NomeJogador" 
                    placeholder="Nome do Jogador"
                    _hover={{
                      borderColor: "rgba(255,255,255,0.24)",
                    }}
                    //onChange={(event) => handleChangeName(event.target.value)}
                  />
                </VStack>

              </>
            )}

            
            
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
};

export default Transfer;