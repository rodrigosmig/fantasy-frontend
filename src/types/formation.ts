export interface Formation {
	id: number;
	nome: string;
}

export interface FormacaoFormData {
	value: number;
	label: string;
}

export interface IFormationContextData {
	formacoes: FormacaoFormData[];
}