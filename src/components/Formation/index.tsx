import { Flex } from "@chakra-ui/react";
import { Shirt } from "components/Shirt";
import { useSelector } from "hooks/useSelector";
import { memo } from "react";
import { Player } from "types/player";

const FormationComponent = ({ onClick }: Props) => {
  const {players} = useSelector(({ team }) => team)

  return (
    <Flex
      flexWrap={"wrap"}
      width={"60%"}
      height={"100%"}
      alignItems={["center"]}
      justifyContent={["center"]}
      position="relative"
      
    >
      <Flex
        position="absolute"
        top={"10%"}
        width={"full"}
        justifyContent={"space-evenly"}
      >
        {players.attackers.map((player, index) => (
          <Shirt onClick={onClick} player={player} key={player.id !== 0 ? player.id : index} />
        ))}
      </Flex>
      <Flex
        position="absolute"
        top={"30%"}
        justifyContent={"space-evenly"}
        width={"full"}
      >
        {players.midfielders.map((player, index) => (
          <Shirt onClick={onClick} player={player} key={player.id !== 0 ? player.id : index} />
        ))}
      </Flex>
      <Flex
        position="absolute"
        top={"52%"}
        justifyContent={"space-evenly"}
        width={"full"}
      >
        {players.defenders.map((player, index) => (
          <Shirt onClick={onClick} player={player} key={player.id !== 0 ? player.id : index} />
        ))}
      </Flex>
      <Flex
        position="absolute"
        top={"70%"}
        justifyContent={"space-evenly"}
      >
        {players.goalkeeper.map((player, index) => (
          <Shirt onClick={onClick} player={player} key={player.id !== 0 ? player.id : index} />
        ))}
      </Flex>
    </Flex>
  )
}

interface Props {
	onClick?: (player: Player) => void
}

export const Formation = memo(FormationComponent)