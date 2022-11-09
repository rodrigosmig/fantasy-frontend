import { IUser } from './../../types/auth';
import { AxiosResponse } from "axios";
import { ILogin, ILoginResponse, IRegister } from "../../types/auth";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(undefined);

export const authService = {
  register: (data: IRegister): Promise<AxiosResponse<IUser>> => apiClient.post(
    "/users/register",
    data,
    ),
  signIn: (credentials: ILogin): Promise<AxiosResponse<ILoginResponse>> => apiClient.post(
    "/auth/login",
    credentials   
  ),
  me: (): Promise<AxiosResponse<IUser>> => apiClient.get("/users/me"), 
};
