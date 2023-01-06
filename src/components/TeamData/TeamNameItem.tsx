import { Box, BoxProps } from "@chakra-ui/react"

export const TeamNameItem = ({ nomeTime, ...rest }: TeamNameItemProps) => {
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

interface TeamNameItemProps extends BoxProps {
  nomeTime: string;
}