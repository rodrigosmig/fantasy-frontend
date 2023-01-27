import { AxiosResponse } from "axios";
import { FilterPlayerForm, PlayersResponse } from "../../types/player";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const playersService = {
  get: (values: FilterPlayerForm): Promise<AxiosResponse<PlayersResponse>> => {
    const pais = values.paisId == 0 ? "" : values.paisId;
    const posicao = values.posicaoId  == 0 ? "" : values.posicaoId;

    return apiClient.get(`/jogadores?nome=${values.nome}&pais=${pais}&posicao=${posicao}&page=${values.page}`);
  }
};
