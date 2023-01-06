import { memo } from "react"
import { Flex } from "@chakra-ui/react"
import { useTeam } from "../../hooks/useTime";
import { FootballFieldSkeleton } from "elements/Skeleton/FootballFieldSkeleton";
import { Formation } from "../Formacao/Formation";

const FootballFieldComponent = () => {
  const { isLoading } = useTeam();

  if (isLoading) {
    return <FootballFieldSkeleton />
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
      <Formation />
    </Flex>
  )
}

export const FootballField = memo(FootballFieldComponent)