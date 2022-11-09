import { Flex } from "@chakra-ui/react";
import { useTime } from "../../hooks/useTime";
import { posicoesMap } from "../../utils/helpers";
import { useJogadoresPosicao } from "../Contexts/JogadoresPosicoesContext";
import { usePosicao } from "../Contexts/PositionContext";
import { ComJogadores } from "./ComJogadores";
import { F343 } from "./F343";
import { F442 } from "./F422";
import { F433 } from "./F433";
import { SemJogadores } from "./SemJogadores";


export const Formacao = () => {
  const { data: time } = useTime();

  const isEmpty = () => {
    return time ? time.jogadores.length === 0 : true;
  }

  console.log(time?.jogadores)
  const getFormacao = () => {
    switch (time?.formacao.nome) {
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
      { isEmpty() && <SemJogadores /> }
      
      { !isEmpty() && <ComJogadores /> }
    </Flex>
  )
}
