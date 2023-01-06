import {
  Box,
  Flex
} from "@chakra-ui/react";
import { TeamDataSkeleton } from "elements/Skeleton/TeamDataSkeleton";
import { FormationItem } from "./FormationItem";
import { TeamNameItem } from "./TeamNameItem";
import { TeamPointsItem } from "./TeamPointsItem";

export const TeamData = () => {
  const team = {
    nome: 'Teste',
    jogadores: [],
    formacao: {
      nome: '4-4-2',
    },
    pontos: 0
  }

  const isLoading = false;

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
          <TeamNameItem nomeTime={team ? team.nome : ""} fontSize={["xx-large"]} />
          </Box>

          <Box
            w={["90%"]}
            mb={[5]}
          >
            <FormationItem label="Formação:" formacao={team ? team.formacao.nome : ""} />
            <TeamPointsItem label="Pontos:" pontos={team ? team.pontos : 0} />
            <TeamPointsItem label="Participação em Ligas:" pontos={team ? team.pontos : 0} />
          </Box>
        </>
      )}
    </Flex>
  )
}