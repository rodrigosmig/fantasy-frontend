import { useQuery } from "react-query";
import { useSession } from "../components/Contexts/AuthContext";
import { jogadorService } from "../services/apiService/jogadorService";

export const getPlayers = async (country: number, position: number, name: string, page: number) => {
  const response = await jogadorService.get(country, position, name, page);

  return response.data
}

export const useJogadores = (country: number, position: number, name: string, page: number) => {
  const { user } = useSession();

  console.log(666, name)

  return useQuery(['jogadores', country, position, name, page, user?.id], () => getPlayers(country, position, name, page), {
    staleTime: 1000 * 60 * 30
  })
}