import { IFormacao } from "./formacao";
import { IJogador } from "./jogador";


export interface ITime {
  id: number;
  nome: string;
  pontos: number;
  formacao: IFormacao;
  jogadores: IJogador[]
}

export interface IAlterarTimeFormData {
  formacaoId: number;
  nomeTime: string;
}

export type AlterarTimeErrorFields = {
  error: string;
  field: "nomeTime" | "formacaoId";
}[]