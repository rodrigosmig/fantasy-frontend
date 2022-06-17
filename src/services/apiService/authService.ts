import { AxiosResponse } from "axios";
import { ILogin, ILoginResponse, IMeResponse, IUser } from "../../types/auth";
import { setupApiClient } from "../api";

const apiClient = setupApiClient();

export const authService = {
  signIn: (credentials: ILogin): Promise<AxiosResponse<ILoginResponse>> => apiClient.post(
      "/sessions",
      credentials,
      {timeout: 5000}
    ),
  me: (): Promise<AxiosResponse<IMeResponse>> => apiClient.get("/me"), 
};
