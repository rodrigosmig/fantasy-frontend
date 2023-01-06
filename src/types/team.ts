import { Formation } from "./formation";
import { Player } from "./player";


export interface Team {
  id: number;
  nome: string;
  pontos: number;
  formacao: Formation;
  jogadores: Player[]
}

export interface TeamFormData {
  formacaoId: number;
  nomeTime: string;
}

export type TeamErrorFields = {
  error: string;
  field: "nomeTime" | "formacaoId";
}[]