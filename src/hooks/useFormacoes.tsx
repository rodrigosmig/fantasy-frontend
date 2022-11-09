import { useQuery } from "react-query";
import { useSession } from "../components/Contexts/AuthContext";
import { formationService } from "../services/apiService/formationService";
import { teamService } from "../services/apiService/teamService";

const getFormation = async () => {
  const response = await formationService.getFormations();    
  
  return response.data
}

export const useFormacoes = () => {
  return useQuery(['formations'], () => getFormation(), {
    staleTime: 1000 * 60 * 60
  })
}