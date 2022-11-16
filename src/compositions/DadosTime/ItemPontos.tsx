import { Box, BoxProps, Text } from "@chakra-ui/react"

export const ItemPontos = ({ label, pontos, ...rest }: ItemPontosProps) => {
  return (
    <Box
      w={["full"]}								
      alignItems={["center"]}
      borderBottom={"1px solid #616480"}
    >
      <Box
        as="label"
        display={"inline-block"}
        fontWeight={["bold"]}
        p={1}
        {...rest}
      >
        { label }
      </Box>
      <Text 
        fontWeight={"bold"} 
        as={"span"}
        color="blue.500"
      >
        { pontos }
      </Text>
    </Box>
  )
}

interface ItemPontosProps extends BoxProps {
  label: string;
  pontos: number;
}