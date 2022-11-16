import { Box, BoxProps, Text } from "@chakra-ui/react"

export const ItemNomeTime = ({ nomeTime, ...rest }: ItemNomeTimeProps) => {
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
        { nomeTime }
      </Box>
    </Box>
  )
}

interface ItemNomeTimeProps extends BoxProps {
  nomeTime: string;
}