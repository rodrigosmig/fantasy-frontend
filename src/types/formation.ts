export interface IFormation {
	id: number;
	formation: string;
}

export interface IFormationForm {
	value: number;
	label: string;
}

export interface IFormationContextData {
	formations: IFormationForm[];
}