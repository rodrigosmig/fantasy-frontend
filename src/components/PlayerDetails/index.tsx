import { Flex, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import { Table } from "components/Table"
import { Button } from "elements/Button";
import { useSelector } from "hooks/useSelector";
import { Player } from "types/player";

export const PlayerDetails = ({ player, remove }: Props) => {
  const theadData = [
    "País",
    "Posição",
    "Pontos",
  ];

  return (
    <>
      <Table
        theadData={theadData}
        size={"sm"}
        mt={4}
      >
        <Tbody textAlign={"center"}>
          <Tr>
          <Td fontSize={["xs", "sm"]}>
            <Text textAlign={"center"} fontWeight="bold">{ player.pais.nome }</Text>
          </Td>
          <Td fontSize={["xs", "sm"]}>
            <Text textAlign={"center"} fontWeight="bold">{ player.posicao.nome }</Text>
          </Td>
          <Td fontSize={["xs", "sm"]}>
            <Text textAlign={"center"} fontWeight="bold">{ player.pontos }</Text>
          </Td>
          </Tr>
          </Tbody>
      </Table>
      <Flex
          mt={[10]}
          justify="flex-end"
          align="center"
        >
          <Button
            size={"sm"}
            type="submit"
            label="Remover"
            bg="pink.500"
            _hover={{ bg: "pink.600" }}
            _active={{
              bg: "pink.400",
              transform: "scale(0.98)",
            }}
            onClick={() => remove(player)}
          />
        </Flex>
    </>
  )
}

interface Props {
  player: Player;
  remove: (player: Player) => void;
}