export interface IPosition {
  id: number;
  nome: string;
}

export interface PositionFormData {
	value: number;
	label: string;
}

export interface PositionContextData {
  posicoesForm: PositionFormData[],
	posicoes: IPosition[];
}

export interface PositionsData {
  defesa: number;
  meio: number;
  ataque: number;
  goleiro: number;
}