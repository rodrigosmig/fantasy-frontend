import { AxiosResponse } from "axios";
import { PlayersResponse } from "../../types/player";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const playersService = {
  get: (country: number, position: number, name: string, page: number): Promise<AxiosResponse<PlayersResponse>> => {
    const pais = country ? country : "";
    const posicao = position ? position : "";

    return apiClient.get(`/jogadores?nome=${name}&pais=${pais}&posicao=${posicao}&page=${page}`);
  }
};
