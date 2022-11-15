export interface IPosition {
  id: number;
  nome: string;
}

export interface IPositionForm {
	value: number;
	label: string;
}

export interface IPositionContextData {
  posicoesForm: IPositionForm[],
	posicoes: IPosition[];
  isLoadingPosicoes: boolean;
}