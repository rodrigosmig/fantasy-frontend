import { Button as ChakraButton, ButtonProps, useBreakpointValue } from "@chakra-ui/react";

interface Props extends ButtonProps {
  label: string
}

export const Button = ({ label, ...rest }: Props) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: false,
    lg: true 
  });

  const size = isWideVersion ? 'md' : 'sm';

  return (
    <ChakraButton
      size={size}
      type="submit" 
      bg="pink.500"
      _hover={{ bg: "pink.600" }}
      _active={{
        bg: "pink.400",
        transform: "scale(0.98)",
      }}
      {...rest}
    >
      {label}
    </ChakraButton>
  )
}