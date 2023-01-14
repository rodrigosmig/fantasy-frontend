import { User } from './../../types/auth';
import { AxiosResponse } from "axios";
import { Login, LoginResponse, IRegister } from "../../types/auth";
import { setupApiClient } from "../api";

const apiClient = setupApiClient(undefined);

export const authService = {
  register: (data: IRegister): Promise<AxiosResponse<User>> => apiClient.post(
    "/users/register",
    data,
    ),
  signIn: (credentials: Login): Promise<AxiosResponse<LoginResponse>> => apiClient.post(
    "/auth/login",
    credentials   
  ),
  me: (): Promise<AxiosResponse<User>> => apiClient.get("/users/me"), 
};
