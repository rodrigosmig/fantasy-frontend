
import { Flex, Image, Text } from '@chakra-ui/react'
import { Player } from 'types/player'

export const Camisas = ({ player }: CamisasProps) => {
  return (
    <Flex direction={"column"} alignItems="center">
      <Image
        width={12}
        height={12}
        src={"images/gray_shirt.png"}
        alt={player.nome ? player.nome : "jogador"}
      />
      <Text 
        fontSize={["12px"]}
        fontWeight={"bold"}
        width="60px"
        textAlign={"center"}
        color={"gray.700"}
      >
        { player.nome }
      </Text>
    </Flex>
  )
}

interface CamisasProps {
  player: Player
}