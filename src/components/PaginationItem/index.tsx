import { 
  Button,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";

export function PaginationItem({ number, isCurrent = false, onPageChange }: Props) {
  const bgColor = useColorModeValue('gray.300', 'gray.700')
  const bgHover = useColorModeValue('gray.200', 'gray.500')

  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default'
        }}
      >
        { number }
      </Button>
    );
  }
  
  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg={bgColor}
      _hover={{
        bg: bgHover
      }}
      onClick={() => onPageChange(number - 1)}

    >
      { number }
    </Button>
  )
}

interface Props {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page:number) => void;
}
