import { memo } from "react"
import { Flex } from "@chakra-ui/react"
import { FootballFieldSkeleton } from "elements/Skeleton/FootballFieldSkeleton";

import { useSelector } from "hooks/useSelector";
import { Formation } from "components/Formacao/Formation";

const FootballFieldComponent = () => {
  const { isLoading } = useSelector(({team}) => team);

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