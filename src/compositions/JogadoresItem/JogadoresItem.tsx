import {
  Td,
  Text,
  Tr
} from "@chakra-ui/react";
import { AddPlayerButton } from "../../components/Button/AddPlayerButton";
import { IJogador } from "../../types/jogador";

export const JogadoresItem = ({ jogador }: Props) => {
  return (
    <Tr key={ 1 } px={[8]}>
      <Td textAlign={"center"} fontSize={["xs", "md"]}>
        <AddPlayerButton />
      </Td>
      <Td fontSize={["xs", "md"]}>
      <Text textAlign={"center"} fontWeight="bold">{ jogador.nome }</Text>
      </Td>
      <Td fontSize={["xs", "md"]}>
      <Text textAlign={"center"} fontWeight="bold">{ jogador.pontos }</Text>
      </Td>
    </Tr>
  )
}

interface Props {
  jogador: IJogador;
}