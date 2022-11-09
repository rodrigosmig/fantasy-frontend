import { ICountry } from "./pais";
import { IPosition } from "./posicao";

export interface IPlayer {
  id: number;
  nome: string;
  posicao: IPosition;
  pontos: string;
  pais: ICountry
}

export interface IQuantityPositions {
  defesa: number;
  meio: number;
  ataque: number;
  goleiro: number;
}

export interface IJogadoresPosicoesContextData {
  defesa: IPlayer[];
  meio: IPlayer[];
  ataque: IPlayer[];
  goleiro: IPlayer[];
  quantidadePosicoes: IQuantityPositions;
}
