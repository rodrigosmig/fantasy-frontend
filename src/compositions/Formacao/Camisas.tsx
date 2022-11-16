import Image from 'next/image'
import red_shirt from '../../assets/images/gray_shirt.png'
import { Flex, Text } from '@chakra-ui/react'

export const Camisas = ({ alt = "jogador" }: CamisasProps) => {
  return (
    <Flex direction={"column"} alignItems="center">
      <Image
      width={56}
      height={56}
      src={red_shirt}
      alt={alt}
    />
    <Text 
      fontSize={["13px"]}
      fontWeight={"bold"}
      width="60px"
      textAlign={"center"}
      color={"gray.700"}
    >{alt}</Text>
    </Flex>
  )
}

interface CamisasProps {
  alt?: string;
}