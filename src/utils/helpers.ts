import { createStandaloneToast } from "@chakra-ui/react"
import { theme } from "../styles/theme"

export const notify = (
  description: string,
  status: 'success' | 'error' | 'warning' = 'success',
  duration: number = 3000
) => {
  const { toast } = createStandaloneToast({theme: theme})
  
  toast({
    description: description,
    position: "top-right",
    status: status,
    duration: duration,
    isClosable: true,
  })
}

export const posicoesMap = {
  "goleiro": 1,
  "defesa": 2,
  "meio": 3,
  "ataque": 4,
}