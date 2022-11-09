import { AxiosResponse } from "axios";
import { IAlterarTimeFormData, ITime } from "../../types/time";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const teamService = {
  getTeam: (): Promise<AxiosResponse<ITime>> => apiClient.get("/times/meutime"),
  changeTeam: (data: IAlterarTimeFormData): Promise<AxiosResponse<ITime>> => apiClient.put("/times/meutime", data),
};
