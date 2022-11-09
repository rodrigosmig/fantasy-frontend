import { memo } from "react"
import { Flex } from "@chakra-ui/react"
import { useTime } from "../../hooks/useTime";
import { CampoSkeleton } from "../Skeleton/CampoSkeleton";
import { Formacao } from "../Formacao/Formacao";

const CampoComponent = () => {
  const { isLoading } = useTime();

  if (isLoading) {
    return <CampoSkeleton />
  }
  return (
    <Flex
      w={["full"]}
      h={["full"]}
      alignItems={["center"]}
      justifyContent={["center"]}
      backgroundImage="url('/images/football_pitch.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="90% 90%"
    >
      <Formacao />
    </Flex>
  )
}

export const Campo = memo(CampoComponent)