import { Button, Flex, Icon } from "@chakra-ui/react";
import { Input } from "../Input/Input";
import { BsSearch } from 'react-icons/bs';

export const SearchPlayer = () => {
  return (
    <Flex
      mt={6}
      width={["full"]}
      alignItems={"center"}
    >
      <Input
        borderRadius={0}
        inputName="NomeJogador" 
        placeholder="Nome do Jogador"
      />
      <Button
        borderRadius={0}
        bgColor={"pink.500"}
        _hover={{ bg: "pink.600" }}
        _active={{
          bg: "pink.400",
          transform: "scale(0.98)",
        }}
      >
        <Icon as={BsSearch} />
      </Button>
    </Flex>
  )
}