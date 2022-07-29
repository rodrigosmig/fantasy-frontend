import { AxiosResponse } from "axios";
import { ITeam } from "../../types/team";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const teamService = {
  getTeam: (): Promise<AxiosResponse<ITeam>> => apiClient.get("/teams/my-team"),
};
