import { AxiosResponse } from "axios";
import { IFormacao } from "../../types/formacao";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const formationService = {
  getFormations: (): Promise<AxiosResponse<IFormacao[]>> => apiClient.get("/formacoes"),
};
