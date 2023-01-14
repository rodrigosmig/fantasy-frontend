import { AxiosResponse } from "axios";
import { ApplicationData, ApplicationDataResponse } from "types/application";
import { Formation } from "../../types/formation";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(null);

export const applicationService = {
  getAppData: (): Promise<AxiosResponse<ApplicationDataResponse>> => apiClient.get("/configurations"),
};
