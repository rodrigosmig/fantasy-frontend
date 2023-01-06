import {
  Box,
  Flex
} from "@chakra-ui/react";
import { TeamDataSkeleton } from "elements/Skeleton/TeamDataSkeleton";
import { useTeam } from "hooks/useTime";
import { FormationItem } from "./FormationItem";
import { TeamNameItem } from "./TeamNameItem";
import { TeamPointsItem } from "./TeamPointsItem";

export const TeamData = () => {
  const { data: time, isLoading } = useTeam();

  return (
    <Flex
      direction={["column"]}
      alignItems={["center"]}
      mt={["1rem"]}
    >
      { isLoading && <TeamDataSkeleton />}

      { !isLoading && (
        <>
          <Box
            width={["90%"]}
            textAlign="center"
          >
          <TeamNameItem nomeTime={time ? time.nome : ""} fontSize={["xx-large"]} />
          </Box>

          <Box
            w={["90%"]}
            mb={[5]}
          >
            <FormationItem label="Formação:" formacao={time ? time.formacao.nome : ""} />
            <TeamPointsItem label="Pontos:" pontos={time ? time.pontos : 0} />
            <TeamPointsItem label="Participação em Ligas:" pontos={time ? time.pontos : 0} />
          </Box>
        </>
      )}
    </Flex>
  )
}