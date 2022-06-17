import { GetServerSidePropsContext } from "next";
import { ITeam } from "./team";

export interface IUser {
  id: number;
  name: string;
  email: string;
  team: ITeam;
}

interface IAuthForm {
  email: string;
  password: string
}

export interface ILogin extends IAuthForm {}

export interface ILoginResponse {
  token: string;
  refreshToken: string,
  user: IUser
}

export interface IAuthContextData {
  signIn: (credentials: ILogin) => Promise<void>;
  //signOut: () => void;
  setUser: (user: IUser) => void,
  user: IUser;
  isAuthenticated: boolean;
}

export interface IRegister extends IAuthForm {
  name: string;
  team_name: string;
  password_confirmation: string;
}

export interface IMeResponse {
  user: IUser
}

export type ITokenContext = GetServerSidePropsContext | null | undefined;

export interface ITokenExpiredError {
  code: string
  error: boolean
  message: string
}

export interface IRefreshTokenResponse extends ILoginResponse {}