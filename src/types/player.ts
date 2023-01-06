import { Country } from "./country";
import { IPosition, PositionsData } from "./position";

export interface Player {
  id: number;
  nome: string;
  posicao: IPosition;
  pontos: string;
  pais: Country
}

export interface PlayesPositionsContextData {
  defesa: Player[];
  meio: Player[];
  ataque: Player[];
  goleiro: Player[];
  quantidadePosicoes: PositionsData;
}
