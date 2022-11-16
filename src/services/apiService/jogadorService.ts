import { AxiosResponse } from "axios";
import { IRespostaBuscaJogador } from "../../types/jogador";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const jogadorService = {
  get: (): Promise<AxiosResponse<IRespostaBuscaJogador>> => apiClient.get("/jogadores"),
};
