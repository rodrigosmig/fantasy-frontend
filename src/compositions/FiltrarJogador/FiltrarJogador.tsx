import { Button, Flex, Icon, Stack } from "@chakra-ui/react";
import { Input } from "../../components/Input/Input";
import { BsSearch } from 'react-icons/bs';
import { forwardRef, ForwardRefRenderFunction, memo } from "react";

const FiltrarJogadorBase: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ onSearch }, ref) => {
  return (
    <Stack>
    <Flex
      mt={6}
      width={["full"]}
      alignItems={"center"}
    >
      <Input
        borderRadius={0}
        inputName="NomeJogador" 
        placeholder="Nome do Jogador"
        ref={ref}
      />
      <Button
        borderRadius={0}
        bgColor={"pink.500"}
        _hover={{ bg: "pink.600" }}
        _active={{
          bg: "pink.400",
          transform: "scale(0.98)",
        }}
        onClick={onSearch}
      >
        <Icon as={BsSearch} />
      </Button>
    </Flex>

    </Stack>
  )
}

interface Props {
  onSearch: () => void;
}

export const FiltrarJogador = memo(forwardRef(FiltrarJogadorBase))