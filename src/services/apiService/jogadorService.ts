import { AxiosResponse } from "axios";
import { IRespostaBuscaJogador } from "../../types/jogador";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const jogadorService = {
  get: (country: number, position: number, name: string, page: number): Promise<AxiosResponse<IRespostaBuscaJogador>> => {
    const pais = country ? country : "";
    const posicao = position ? position : "";

    return apiClient.get(`/jogadores?nome=${name}&pais=${pais}&posicao=${posicao}&page=${page}`);
  }
};
