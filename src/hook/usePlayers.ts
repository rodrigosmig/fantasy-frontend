import { useSession } from './../contexts/AuthContext';
import { useQuery } from "react-query";
import { playersService } from '../services/apiService/playersService';

export const getPlayers = async (country: string, position: string, name: string) => {
  const response = await playersService.get();
  
  return response.data
}

export const usePlayers = (country: string, position: string, name: string) => {
  const { user } = useSession()

  return useQuery(['players', country, position, name, user?.id], () => getPlayers(country, position, name), {
    staleTime: 1000 * 5
  })
}