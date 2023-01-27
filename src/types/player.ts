import { Country } from "./country";
import { Position } from "./position";

export interface Player {
  id: number;
  nome: string;
  posicao: Position;
  pontos: number;
  pais: Country
}

export interface PlayersType {
  isLoading: boolean;
  isFetched: boolean;
  players: Player[];
  pagination: {
    offset: number;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    last: boolean;
  }
}

export interface FilterPlayerForm {
  paisId: number;
  posicaoId: number;
  nome: string;
  page: number;
}

export interface PlayersResponse {
  content: Player[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  last: boolean;
  pageable: {
    offset: number;
  }
}