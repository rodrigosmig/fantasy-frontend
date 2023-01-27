import { Flex } from "@chakra-ui/react";
import { FootballFieldSkeleton } from "elements/Skeleton/FootballFieldSkeleton";
import { memo, useCallback } from "react";

import { Formation } from "components/Formation";
import { Button } from "elements/Button";
import { useDispatch } from "hooks/useDispatch";
import { useSelector } from "hooks/useSelector";
import { savePlayers } from "store/thunks/teamThunk";
import { Player } from "types/player";

const FootballFieldComponent = ({ onClick }: Props) => {
  const dispatch = useDispatch();
  const { isLoading, hasChange } = useSelector(({team}) => team);

  const handleSaveTeam = useCallback(() => {
    dispatch(savePlayers())
  }, [dispatch])

  if (isLoading) {
    return <FootballFieldSkeleton />
  }

  return (
    <>
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
        <Formation onClick={onClick} />
      </Flex>
      <Flex
        alignItems={["center"]}
        justifyContent={["center"]}
      >
        { hasChange && (
          <Button 
            label="Salvar Time"
            bgColor={"pink.500"}
            _hover={{ bg: "pink.600" }}
            _active={{
              bg: "pink.400",
              transform: "scale(0.98)",
            }}
            isLoading={isLoading}
            onClick={handleSaveTeam}
          />
        )}        
      </Flex>
    </>
  )
}

interface Props {
	onClick?: (player: Player) => void
}

export const FootballField = memo(FootballFieldComponent)