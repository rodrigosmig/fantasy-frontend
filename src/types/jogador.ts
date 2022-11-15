import { IPais } from "./pais";
import { IPosition } from "./posicao";

export interface IJogador {
  id: number;
  nome: string;
  posicao: IPosition;
  pontos: string;
  pais: IPais
}

export interface IQuantidadePosicoes {
  defesa: number;
  meio: number;
  ataque: number;
  goleiro: number;
}

export interface IJogadoresPosicoesContextData {
  defesa: IJogador[];
  meio: IJogador[];
  ataque: IJogador[];
  goleiro: IJogador[];
  quantidadePosicoes: IQuantidadePosicoes;
}
