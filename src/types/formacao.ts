export interface IFormacao {
	id: number;
	nome: string;
}

export interface IFormacaoForm {
	value: number;
	label: string;
}

export interface IFormationContextData {
	formacoes: IFormacaoForm[];
}