import { Flex } from "@chakra-ui/react";
import { F343 } from "./F343";
import { F442 } from "./F422";
import { F433 } from "./F433";
import { SemJogadores } from "./SemJogadores";


export const pontoFormation = () => {
  /* const { data: time } = useTeam(); */

  
  const team = {
    jogadores: [],
    formacao: {
    nome: '4-4-2'
  }}
  
  const isEmpty = () => {
    return team ? team.jogadores.length === 0 : true;
  }

  const getFormation = () => {
    switch (team?.formacao.nome) {
      case "4-4-2":
        return <F442 />
      case "4-3-3":
        return <F433 />
      case "3-4-3":
        return <F343 />
      default:
        return <F442 />
    }
  }

  return (
    <Flex
      width={"60%"}
      height={"80%"}
      flexDir="column"
      justifyContent={"space-between"}
    >
      campo
    </Flex>
  )
}
