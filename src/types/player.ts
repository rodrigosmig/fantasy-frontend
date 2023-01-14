import { Country } from "./country";
import { Position } from "./position";

export interface Player {
  id: number;
  nome: string;
  posicao: Position;
  pontos: number;
  pais: Country
}

export interface PlayersResponse {
  content: Player[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}