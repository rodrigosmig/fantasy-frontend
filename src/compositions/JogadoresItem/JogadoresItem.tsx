import {
  Button,
  Icon,
  Td,
  Text,
  Tr
} from "@chakra-ui/react";
import { MdAdd } from 'react-icons/md';
import { AddPlayerButton } from "../../components/Button/AddPlayerButton";
import { InfoPlayerButton } from "../../components/Button/InfoPlayerButton";
import { IJogador } from "../../types/jogador";

export const JogadoresItem = ({ jogador }: Props) => {
  return (
    <Tr key={ 1 } px={[8]}>
      <Td fontSize={["xs", "md"]}>
        <InfoPlayerButton />
      </Td>
      <Td fontSize={["xs", "md"]}>
      <Text textAlign={"center"} fontWeight="bold">{ jogador.nome }</Text>
      </Td>
      <Td fontSize={["xs", "md"]}>
      <Text textAlign={"center"} fontWeight="bold">{ jogador.pontos }</Text>
      </Td>

      <Td fontSize={["xs", "md"]}>
        <AddPlayerButton />
      </Td>
    </Tr>
  )
}

interface Props {
  jogador: IJogador;
}