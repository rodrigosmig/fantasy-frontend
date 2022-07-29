import { IUser } from './../../types/auth';
import { AxiosResponse } from "axios";
import { ILogin, ILoginResponse, IMeResponse, IRegister } from "../../types/auth";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(undefined);

export const authService = {
  register: (data: IRegister): Promise<AxiosResponse<IUser>> => apiClient.post(
    "/auth/register",
    data,
    ),
  signIn: (credentials: ILogin): Promise<AxiosResponse<ILoginResponse>> => apiClient.post(
    "/auth/login",
    credentials   
  ),
  me: (): Promise<AxiosResponse<IMeResponse>> => apiClient.get("/auth/me"), 
};
