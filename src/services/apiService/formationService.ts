import { AxiosResponse } from "axios";
import { Formation } from "../../types/formation";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const formationService = {
  getFormations: (): Promise<AxiosResponse<Formation[]>> => apiClient.get("/formacoes"),
};
