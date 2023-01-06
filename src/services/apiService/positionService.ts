import { IPosition } from '../../types/position';
import { AxiosResponse } from "axios";
import { Formation } from "../../types/formation";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const positionService = {
  getPositions: (): Promise<AxiosResponse<IPosition[]>> => apiClient.get("/posicoes"),
};
