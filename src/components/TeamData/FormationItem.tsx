import { Box, BoxProps, Text } from "@chakra-ui/react"

export const FormationItem = ({ label, formacao, ...rest }: FormationItemProps) => {
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
        { formacao }
      </Text>
    </Box>
  )
}

interface FormationItemProps extends BoxProps {
  label: string;
  formacao: string;
}