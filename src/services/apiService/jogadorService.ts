import { AxiosResponse } from "axios";
import { IJogador } from "../../types/jogador";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const jogadorService = {
  get: (): Promise<AxiosResponse<IJogador[]>> => apiClient.get("/jogadores"),
};
