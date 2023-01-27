import {
  Box,
  Flex,
  Tbody,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import { PlayerModal } from "components/PlayerModal";
import { PlayersItem } from "components/PlayersItem";
import { Table } from "components/Table";
import { FilterNamePlayer } from "compositions/FilterPlayer";
import { Layout } from "compositions/Layout";
import { Pagination } from "compositions/Pagination";
import { Loading } from "elements/Loading";
import { Select } from "elements/Select";
import { PlayersSkeleton } from "elements/Skeleton/PlayersSkeleton";
import { useDispatch } from "hooks/useDispatch";
import { useSelector } from "hooks/useSelector";
import { NextPage } from "next";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { addPlayer, deletePlayer } from "store/slices/teamSlice";
import { getAllPlayers } from "store/thunks/playersThunk";
import { Country } from "types/country";
import { FilterPlayerForm, Player } from "types/player";
import { Position } from "types/position";
import { POSITIONS_NAME } from "utils/enum/positions-name";

const Transfer: NextPage = () => {
  const dispatch = useDispatch();

  const [selectedPlayer, setSelectedPlayer] = useState({} as Player);

  const { isLoading, paises, posicoes } = useSelector(({appData}) => appData);
  const { isLoading: isLoadingPlayers, isFetched, players } = useSelector(({players}) => players);
  const { counterByPosition, numberByPosition, team } = useSelector(({team}) => team);
  const { pagination } = useSelector(({players}) => players);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const isEmpty = players.length === 0;

  const { register, handleSubmit, getValues } = useForm<FilterPlayerForm>();

  const handleSearchPlayers = handleSubmit(async values => {
    const data = {
      ...values,
      page: 0
    }
    try {
      dispatch(getAllPlayers(data))
    } catch (error) {
      console.error(error)
    }
  })

  const handlePagination = (page: number) => {
    const {nome, paisId, posicaoId} = getValues()
    const data = {
      nome,
      paisId,
      posicaoId,
      page
    }
    
    try {
      dispatch(getAllPlayers(data))
    } catch (error) {
      console.error(error)
    }
  }

  const isNotAvailable = (player: Player) => {
    const position = POSITIONS_NAME[player.posicao.nome];
    const isInTeam = team.jogadores.some(p => p.id === player.id)

    return counterByPosition[position] >= numberByPosition[position] || isInTeam;
  }

  const getPaises = (paises: Country[]) => {
    const firstItem = [{
      value: 0,
      label: "Selecione"
    }]
  
    const countriesForm = paises.map(country => {
      return {
        value: country.id,
        label: country.nome
      }
    })

    return [
      ...firstItem,
      ...countriesForm
    ];      
  }

  const theadData = [
    "Adicionar",
    "Jogador",
    "Posição",
    "Pontos",
  ];

  const getPositions = (positions: Position[]) => {
    const firstItem = [{
      value: 0,
      label: "Selecione"
    }]
  
    const countriesForm = positions.map(position => {
      return {
        value: position.id,
        label: position.nome
      }
    })

    return [
      ...firstItem,
      ...countriesForm
    ];      
  }

  const handleAddPlayer = useCallback((player: Player) => {
    dispatch(addPlayer(player))
  }, [dispatch])

  const handlePlayerDetails = useCallback((player: Player) => {
    setSelectedPlayer(player)
    onOpen()
  }, [onOpen])

  const handleRemovePlayer = useCallback((player: Player) => {
    dispatch(deletePlayer(player))
    onClose()
  }, [dispatch])

  return (
    <>
      <PlayerModal
        player={selectedPlayer}
        isOpen={isOpen} 
        onClose={onClose}
        remove={handleRemovePlayer}
      />

      <Layout onClick={handlePlayerDetails}>
        <Flex
          as="form"
          direction={"column"}
          alignItems={["center"]}
          width="full"
          height={"full"}
          mt="1.8rem"
          onSubmit={handleSearchPlayers}
        >
          <Flex
            direction={"column"}
            alignItems={["center"]}
            width="full"
            height={["500px"]}
          >
            <Box
              width={"95%"}
              mb="4"
            >
              { isLoading && <PlayersSkeleton /> }

              { !isLoading && (
                <>
                  <VStack spacing={[3]}>
                    <Select
                      options={getPaises(paises)}
                      inputName='pais'
                      label='País'
                      borderRadius={0}
                      _focus={{
                        borderColor: "pink.500",
                      }}
                      {...register('paisId')}
                    />

                    <Select
                      options={getPositions(posicoes)}
                      inputName='formacao'
                      label='Posição'
                      borderRadius={0}
                      _focus={{
                        borderColor: "pink.500",
                      }}
                      {...register('posicaoId')}
                    />
                    <FilterNamePlayer
                      register={register}
                    />
                  </VStack>

                  { isLoadingPlayers && <Loading /> }
                  
                  { !isLoadingPlayers && isFetched && (
                    <Table
                      isEmpty={isEmpty}
                      theadData={theadData}
                      size={"sm"}
                      mt={4}
                    >
                      <Tbody textAlign={"center"}>
                        {players.map(player => (
                          <PlayersItem
                            onClick={handleAddPlayer}
                            key={player.id} 
                            player={player}
                            isNotAvailable={isNotAvailable(player)}
                          />
                        ))}
                      </Tbody>
                    </Table>
                  )}

                  {!isEmpty && !isLoadingPlayers && (
                    <Pagination
                      from={pagination.offset + 1}
                      to={pagination.last ? pagination.totalElements : pagination.offset + pagination.size}
                      lastPage={pagination.totalPages}
                      totalRegisters={pagination.totalElements}
                      currentPage={pagination.number + 1}
                      onPageChange={handlePagination}
                    />
                  )}
                </>
              )}
            </Box>
          </Flex>
        </Flex>
      </Layout>
    </>
  )
};

export default Transfer;