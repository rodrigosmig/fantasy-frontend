import { useQuery } from "react-query";
import { useSession } from "../store/context/AuthContext";
import { teamService } from "../services/apiService/teamService";

const getTeam = async () => {
  const response = await teamService.getTeam();    
  
  return response.data
}

export const useTeam = () => {
  const { user } = useSession()

  return useQuery(['time', user?.id], () => getTeam(), {
    staleTime: 1000 * 60 * 60
  })
}