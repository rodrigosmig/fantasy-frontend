import {
  Button, FormControl,
  FormLabel,
  Icon,
  InputGroup, InputRightElement
} from "@chakra-ui/react";
import { Input } from "elements/Input";
import { useSelector } from "hooks/useSelector";
import { memo } from "react";
import { UseFormRegister } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import { FilterPlayerForm } from "types/player";

const FilterNamePlayerBase = ({ register }: Props) => {
  const { isLoading } = useSelector(({players}) => players);

  return (
    <FormControl
      mt={6}
      width={["full"]}
    >
      <FormLabel htmlFor={'playerName'}>Nome</FormLabel>

      <InputGroup size='md'>
        <Input
          id="playerName"
          borderRadius={0}
          inputName="NomeJogador" 
          placeholder="Nome do Jogador"
          {...register('nome')}
        />
        <InputRightElement>
          <Button
            type="submit"
            borderRadius={0}
            bgColor={"pink.500"}
            _hover={{ bg: "pink.600" }}
            _active={{
              bg: "pink.400",
              transform: "scale(0.98)",
            }}
            isLoading={isLoading}
          >
            <Icon as={BsSearch} />
          </Button>
        </InputRightElement>
      </InputGroup>        
    </FormControl>
  )
}

interface Props {
  register: UseFormRegister<FilterPlayerForm>
}

export const FilterNamePlayer = memo(FilterNamePlayerBase)