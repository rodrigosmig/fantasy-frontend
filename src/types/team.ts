import { Formation } from "./formation";
import { Player } from "./player";

export interface TeamType {
  isLoading: boolean;
  team: Team;
  hasChange: boolean;
  numberByPosition: {
    goalkeeper: number;
    defenders: number;
    midfielders: number;
    attackers: number;
  };
  counterByPosition: {
    goalkeeper: number;
    defenders: number;
    midfielders: number;
    attackers: number;
  };
  players: {
    goalkeeper: Player[],
    defenders: Player[],
    midfielders: Player[],
    attackers: Player[],
  };
}

export interface TeamPlayersData {
  jogadoresIds: number[];
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