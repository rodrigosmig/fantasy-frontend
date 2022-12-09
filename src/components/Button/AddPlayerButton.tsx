import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { MdAdd } from 'react-icons/md';

interface Props extends ButtonProps {}

export const AddPlayerButton = ({ ...rest }: Props) => {
  return (
    <Button
      size={"xs"}
      rounded="full"
      bgColor={"green.500"}
      _hover={{ bg: "green.600" }}
      _active={{
        bg: "green.400",
        transform: "scale(0.98)",
      }}
    >
      <Icon as={MdAdd} />
    </Button>
  )
}