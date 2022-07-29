import { AxiosResponse } from "axios";
import { IFormation } from "../../types/formation";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const formationService = {
  getFormations: (): Promise<AxiosResponse<IFormation[]>> => apiClient.get("/formations"),
};
