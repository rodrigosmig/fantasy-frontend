import { AxiosResponse } from "axios";
import { Player } from "../../types/player";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const playersService = {
  get: (): Promise<AxiosResponse<Player[]>> => apiClient.get("/jogadores"),
};
