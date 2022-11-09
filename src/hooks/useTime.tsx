import { useQuery } from "react-query";
import { useSession } from "../components/Contexts/AuthContext";
import { teamService } from "../services/apiService/teamService";

const getTeam = async () => {
  const response = await teamService.getTeam();    
  
  return response.data
}

export const useTime = () => {
  const { user } = useSession()

  return useQuery(['time', user?.id], () => getTeam(), {
    staleTime: 1000 * 60 * 60
  })
}