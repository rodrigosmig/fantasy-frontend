import { IFormacao } from "./formacao";
import { IPlayer } from "./jogador";


export interface ITime {
  id: number;
  nome: string;
  pontos: number;
  formacao: IFormacao;
  jogadores: IPlayer[]
}

export interface IAlterarTimeFormData {
  formacaoId: number;
  nomeTime: string;
}

export type AlterarTimeErrorFields = {
  error: string;
  field: "nomeTime" | "formacaoId";
}[]