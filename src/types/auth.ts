import { NextPageContext } from "next";

export interface User {
  id: number;
  nome: string;
  email: string;
}

interface AuthFormData {
  email: string;
  senha: string
}

export interface Login extends AuthFormData {}

export interface LoginResponse {
  token: string;
}

export interface LoginError {
  message: string;
}

export type LoginErrorFields = {
  error: string;
  field: "email" | "senha";
}[]

export interface AuthContextData {
  signIn: (credentials: Login) => Promise<void>;
  signOut: () => void;
  setUser: (user: User) => void,
  user: User;
  isAuthenticated: boolean;
}

export interface AuthType {
  isLoading: boolean;
  token: string;
  user: User;
  isAuthenticated: boolean;
  isError: boolean,
  error: {
    statusCode: number,
    message: string
  }
}

export interface IRegister extends AuthFormData {
  nome: string;
  nomeTime: string;
  confirmacaoSenha: string;
}

export type RegisterErrorFields = {
  error: string;
  field: "nome" | "email" | "senha" | "confirmacaoSenha" | "nomeTime";
}[]

export type ITokenContext = NextPageContext | null | undefined;

export interface ITokenExpiredError {
  code: string
  error: boolean
  message: string
}

export interface IRefreshTokenResponse extends LoginResponse {}

export interface IDecodedToken {
  iss: string;
  sub: string;
  iat: number,
  exp: number  
}