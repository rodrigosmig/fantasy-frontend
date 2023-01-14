import { Flex } from "@chakra-ui/react";
import { useSelector } from "hooks/useSelector";
import { Camisas } from "./Camisas";

export const Formation = () => {
  const {players} = useSelector(({ team }) => team)

  return (
    <Flex
      width={"60%"}
      height={"80%"}
      flexDir="column"
      justifyContent={"space-between"}
    >
      <Flex
        justifyContent={"space-evenly"}
      >
        {players.attacker.map((player, index) => (
          <Camisas player={player} key={player.id !== 0 ? player.id : index} />
        ))}
      </Flex>
      <Flex
        justifyContent={"space-evenly"}
      >
        {players.midfielder.map((player, index) => (
          <Camisas player={player} key={player.id !== 0 ? player.id : index} />
        ))}
      </Flex>
      <Flex
        justifyContent={"space-evenly"}
      >
        {players.defenders.map((player, index) => (
          <Camisas player={player} key={player.id !== 0 ? player.id : index} />
        ))}
      </Flex>
      <Flex
        mb={8}
        justifyContent={"space-evenly"}
      >
        <Camisas player={players.goalkeeper} />

      </Flex>
    </Flex>
  )
}
