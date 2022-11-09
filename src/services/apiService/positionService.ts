import { IPosition } from './../../types/posicao';
import { AxiosResponse } from "axios";
import { IFormacao } from "../../types/formacao";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const positionService = {
  getPositions: (): Promise<AxiosResponse<IPosition[]>> => apiClient.get("/posicoes"),
};
