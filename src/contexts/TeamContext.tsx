import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { tokenService } from "../services/tokenService";
import { ITeam, ITeamContextData } from "../types/team";
import { teamService } from "../services/apiService/teamService";
import { useSession } from "./AuthContext";

const TeamContext = createContext({} as ITeamContextData);

export const TeamProvider = ({ children }: TeamProviderProps) => {
  const { user } = useSession();

  const [team, setTeam] = useState({} as ITeam);

  useEffect(() => {
    const { token } = tokenService.get(null);

    if (token) {
      teamService.getTeam().then(response => {
        setTeam(response.data)
      })
    }
  }, [user]);

  return (
    <TeamContext.Provider value={{ team, setTeam }}>
      {children}
    </TeamContext.Provider>
  )
}

export const useTeam = () => {
  const { team, setTeam } = useContext(TeamContext);
  
  return {
    team,
    setTeam
    /* formation,
    isLoading,
    changeFormation */
  }
}

interface TeamProviderProps {
  children: ReactNode;
}