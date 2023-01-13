import { Formation } from "./formation";
import { Player } from "./player";

export interface TeamType {
  isLoading: boolean;
  team: Team;
  numberByPosition: {
    defence: number;
    midfield: number;
    attack: number;
  };
  players: {
    goalkeeper: Player,
    defenders: Player[],
    midfielder: Player[],
    attacker: Player[],
  };
}

interface Players {
  goalkeeper: Player,
  defenders: Player[],
  midfielder: Player[],
  attacker: Player[],
}

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