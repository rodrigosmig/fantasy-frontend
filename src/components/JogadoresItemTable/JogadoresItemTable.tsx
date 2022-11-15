import {
  Button,
  Icon,
  Td,
  Text,
  Tr
} from "@chakra-ui/react";
import { MdAdd } from 'react-icons/md';

export const JogadoresItemTable = () => {
  return (
    <Tr key={ 1 } px={[8]}>
      <Td fontSize={["xs", "md"]}>
        <Text textAlign={"center"} fontWeight="bold">{"Info"}</Text>
      </Td>
      <Td fontSize={["xs", "md"]}>
      <Text textAlign={"center"} fontWeight="bold">{"Cristiano Ronaldo"}</Text>
      </Td>
      <Td fontSize={["xs", "md"]}>
      <Text textAlign={"center"} fontWeight="bold">{"100"}</Text>
      </Td>

      <Td fontSize={["xs", "md"]}>
        <Button
          size={"xs"}
          rounded="full"
          bgColor={"pink.500"}
          _hover={{ bg: "pink.600" }}
          _active={{
            bg: "pink.400",
            transform: "scale(0.98)",
          }}
        >
          <Icon as={MdAdd} />
        </Button>
      </Td>
    </Tr>
  )
}