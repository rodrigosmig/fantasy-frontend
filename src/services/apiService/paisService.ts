import { IPais } from './../../types/pais';
import { AxiosResponse } from "axios";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const paisService = {
  getPaises: (): Promise<AxiosResponse<IPais[]>> => apiClient.get("/paises"),
};
