import { GetServerSidePropsContext } from "next";
import { ITime } from "./time";

export interface IUser {
  id: number;
  nome: string;
  email: string;
}

interface IAuthForm {
  email: string;
  senha: string
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
  field: "email" | "senha";
}[]

export interface IAuthContextData {
  signIn: (credentials: ILogin) => Promise<void>;
  signOut: () => void;
  setUser: (user: IUser) => void,
  user: IUser;
  isAuthenticated: boolean;
}

export interface IRegister extends IAuthForm {
  nome: string;
  nomeTime: string;
  confirmacaoSenha: string;
}

export type RegisterErrorFields = {
  error: string;
  field: "nome" | "email" | "senha" | "confirmacaoSenha" | "nomeTime";
}[]

export type ITokenContext = GetServerSidePropsContext | null | undefined;

export interface ITokenExpiredError {
  code: string
  error: boolean
  message: string
}

export interface IRefreshTokenResponse extends ILoginResponse {}

export interface IDecodedToken {
  iss: string;
  sub: string;
  iat: number,
  exp: number
  
}