
import { Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { Player } from 'types/player';

const ShirtComponent = ({ player, onClick }: CamisasProps) => {
  const {asPath } = useRouter();
  console.log(asPath)
  const isValidPlayer = () => {
    return player.id !== 0 && player.nome !== "";
  }

  const srcImage = isValidPlayer() ? "images/red_shirt.png" : "images/gray_shirt.png"

  const isClickable = () => {
    return isValidPlayer() && asPath === "/transfer";
  }

  return (
    <Flex 
      direction={"column"} 
      alignItems="center"
      cursor={isClickable() ? "pointer" : ""}
      onClick={ isClickable() && onClick ? () => onClick(player) : () => ""}
    >
      <Image
        width={12}
        height={12}
        src={srcImage}
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
  player: Player;
  onClick?: (player: Player) => void;
}

export const Shirt = memo(ShirtComponent)