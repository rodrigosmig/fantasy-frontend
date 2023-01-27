import {
  Button,
  Icon,
  Td,
  Text,
  Tr
} from "@chakra-ui/react";
import { Player } from "types/player";

import {IoMdAdd} from 'react-icons/io'

export const PlayersItem = ({ player, isNotAvailable, onClick }: Props) => {
  return (
    <Tr key={ 1 } px={[8]}>
      <Td textAlign={"center"} fontSize={["xs", "md"]}>
        <Button 
          size={"xs"}
          color="red"
          bgColor={"pink.500"}
          _hover={{ bg: "pink.600" }}
          _active={{
            bg: "pink.400",
            transform: "scale(0.98)",
          }}
          onClick={() => onClick(player)}
          isDisabled={isNotAvailable}
        >
          <Icon as={IoMdAdd} color="white" fontWeight={"bolder"} />
        </Button>
      </Td>
      <Td fontSize={["xs", "sm"]}>
        <Text textAlign={"center"} fontWeight="bold">{ player.nome }</Text>
      </Td>
      <Td fontSize={["xs", "sm"]}>
        <Text textAlign={"center"} fontWeight="bold">{ player.posicao.nome }</Text>
      </Td>
      <Td fontSize={["xs", "sm"]}>
        <Text textAlign={"center"} fontWeight="bold">{ player.pontos }</Text>
      </Td>
    </Tr>
  )
}

interface Props {
  player: Player;
  isNotAvailable: boolean;
  onClick: (player: Player) => void;
}