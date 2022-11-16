import { Flex } from "@chakra-ui/react";
import { useTime } from "../../hooks/useTime";
import { ComJogadores } from "./ComJogadores";
import { SemJogadores } from "./SemJogadores";

export const Formacao = () => {
  const { data: time } = useTime();

  const isEmpty = () => {
    return time ? time.jogadores.length === 0 : true;
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
