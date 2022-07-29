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
}

export interface ILoginError {
  message: string;
}

export type LoginErrorFields = {
  error: string;
  field: "email" | "password";
}[]

export interface IAuthContextData {
  signIn: (credentials: ILogin) => Promise<void>;
  signOut: () => void;
  setUser: (user: IUser) => void,
  user: IUser;
  isAuthenticated: boolean;
}

export interface IRegister extends IAuthForm {
  name: string;
  teamName: string;
  passwordConfirmation: string;
}

export type RegisterErrorFields = {
  error: string;
  field: "name" | "email" | "password" | "passwordConfirmation" | "teamName";
}[]

export interface IMeResponse extends IUser {
  team: ITeam
}

export type ITokenContext = GetServerSidePropsContext | null | undefined;

export interface ITokenExpiredError {
  code: string
  error: boolean
  message: string
}

export interface IRefreshTokenResponse extends ILoginResponse {}