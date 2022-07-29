import styled from "styled-components";
import { SelectField } from "../components/molecules/SelectField";
import { Layout } from "../components/organisms/Layout";
import { Search } from "../components/molecules/SearchField";
import { PlayersTable } from "../components/molecules/PlayersTable";
import { Pagination } from "../components/organisms/Pagination";
import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";
import { ICountry, IPlayer, IPosition } from "../types/players";
import { AxiosResponse } from "axios";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { playersService } from "../services/apiService/playersService";
import { usePlayers } from "../hook/usePlayers";

const Transfer = ({ positions, countries }: Props) => {
  const [players, setPlayers] = useState<IPlayer[]>([])
  const [playerName, setPlayerName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');

  const { data, isLoading } = usePlayers(selectedCountry, selectedPosition, playerName);

  useEffect(() => {
    async function getPlayers() {
      const response = await playersService.get();
      
      const allPlayers = response.data
      
      setPlayers(allPlayers)
    }

    getPlayers()
  }, [])

  const isEmpty = () => {
    return players.length === 0;
  }

  const handleChangePlayerName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value)
  }, [playerName])

  const handleChangeCountry = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value)
  }, [selectedCountry])

  const handleChangePosition = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPosition(event.target.value)
  }, [selectedPosition])

  return (
    <Layout>
      <Container>
        <Content>
          <Item>
            <SelectField
              value={selectedCountry}
              label="País"
              name="country"
              options={countries}
              onChange={handleChangeCountry}
            />
          </Item>

          <Item>
            <SelectField
              value={selectedPosition}
              label="Posição"
              name="countries"
              options={positions}
              onChange={handleChangePosition}
            />
          </Item>

          <Item>
            <Search 
              value={playerName}
              placeholder="Nome do Jogador"
              onChange={handleChangePlayerName}
            />
          </Item>
          
          { !isEmpty() && (
            <>
              <Item>
                <PlayersTable players={players} />
              </Item>    

              <Item>
                <Pagination
                  lastPage={10}
                  currentPage={1}
                  totalRegisters={1000}
                />
              </Item>  
            </>

          )}
          
        </Content>
      </Container>
    </Layout>
  )
}

interface Props {
  positions: {
    value: number,
    label: string
  }[],
  countries: {
    value: number,
    label: string
  }[]
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.875rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
`;

const Item = styled.div`
  width: 95%;
  margin-bottom: 1rem;

  & input {
    width: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const getServerSideProps = withSSRAuth(async (context) => {
  const apiClient = setupApiClient(context);
  
  const positionsResponse: AxiosResponse<IPosition[]> = await apiClient.get('/positions');
  const positions = positionsResponse.data.map(position => {
    return {
      value: position.id,
      label: position.name
    }
  })

  const countriesResponse: AxiosResponse<ICountry[]> = await apiClient.get('/countries');
  const countries = countriesResponse.data.map(country => {
    return {
      value: country.id,
      label: country.name
    }
  })

  return {
    props: {
      countries,
      positions
    }
  }
})

export default Transfer;