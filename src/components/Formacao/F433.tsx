import { Flex } from "@chakra-ui/react"
import { Camisas } from "./Camisas"


export const F433 = () => {
  return (
    <>
      <Flex
        justifyContent={"space-evenly"}
      >
        <Camisas alt="Atacante"/>
        <Camisas alt="Atacante"/>
        <Camisas alt="Meio-campo"/>
      </Flex>

      <Flex
        justifyContent={"space-evenly"}
      >
        <Camisas alt="Meio-campo"/>
        <Camisas alt="Meio-campo"/>
        <Camisas alt="Meio-campo"/>
      </Flex>

      <Flex
        justifyContent={"space-evenly"}
      >
        <Camisas alt="Zagueiro"/>
        <Camisas alt="Zagueiro"/>
        <Camisas alt="Zagueiro"/>
        <Camisas alt="Zagueiro"/>
      </Flex>

      <Flex
        justifyContent={"space-evenly"}
        mb={["8"]}
      >
        <Camisas alt="Goleiro"/>
      </Flex>
    </>
  )
}
