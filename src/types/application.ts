export interface ApplicationData {
  isLoading: boolean,
  paises: Country[];
  posicoes: Formation[];
  formacoes: Position[];
}

export interface ApplicationDataResponse extends Omit<ApplicationData, 'isLoading'> {}

export interface Country {
  id: number;
  nome: string;
  sigla: string
}

export interface Formation {
	id: number;
	nome: string;
}

export interface Position {
  id: number;
  nome: string;
}