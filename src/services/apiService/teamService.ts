import { AxiosResponse } from "axios";
import { TeamFormData, Team, TeamPlayersData } from "../../types/team";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const teamService = {
  getTeam: (): Promise<AxiosResponse<Team>> => apiClient.get("/times/meutime"),
  changeTeam: (data: TeamFormData): Promise<AxiosResponse<Team>> => apiClient.put("/times/meutime", data),
  savePlayers: (data: TeamPlayersData): Promise<AxiosResponse<Team>> => apiClient.post("/times/meutime/jogadores", data),
};
