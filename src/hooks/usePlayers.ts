import { playersService } from './../services/apiService/playersService';
import { useQuery } from "react-query";
import { useSelector } from './useSelector';

export const getPlayers = async (country: number, position: number, name: string, page: number) => {
  const response = await playersService.get(country, position, name, page);

  return response.data
}

export const useJogadores = (country: number, position: number, name: string, page: number) => {
  const { user } = useSelector(({auth}) => auth);

  return useQuery(['players', country, position, name, page, user?.id], () => getPlayers(country, position, name, page), {
    staleTime: 1000 * 60 * 30
  })
}