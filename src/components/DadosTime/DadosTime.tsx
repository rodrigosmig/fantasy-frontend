import { 
	Box, 
	Flex, 
} from "@chakra-ui/react";
import { useTime } from "../../hooks/useTime";
import { DadosTimeSkeleton } from "../Skeleton/DadosTimeSkeleton";
import { ItemFormacao } from "./ItemFormacao";
import { ItemNomeTime } from "./ItemNomeTime";
import { ItemPontos } from "./ItemPontos";

export const DadosTime = () => {
  const { data: time, isLoading } = useTime();

  return (
    <Flex
      direction={["column"]}
      alignItems={["center"]}
      mt={["1rem"]}
    >
      { isLoading && <DadosTimeSkeleton />}

      { !isLoading && (
        <>
          <Box
            width={["90%"]}
            textAlign="center"
          >
          <ItemNomeTime nomeTime={time ? time.nome : ""} fontSize={["xx-large"]} />
          </Box>

          <Box
            w={["90%"]}
            mb={[5]}
          >
            <ItemFormacao label="Formação:" formacao={time ? time.formacao.nome : ""} />
            <ItemPontos label="Pontos:" pontos={time ? time.pontos : 0} />
            <ItemPontos label="Participação em Ligas:" pontos={time ? time.pontos : 0} />
          </Box>
        </>
      )}
    </Flex>
  )
}