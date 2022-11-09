import { AxiosResponse } from "axios";
import { IPlayer } from "../../types/jogador";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const playersService = {
  get: (): Promise<AxiosResponse<IPlayer[]>> => apiClient.get("/jogadores"),
};
