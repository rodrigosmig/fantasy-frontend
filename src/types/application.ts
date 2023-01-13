import { Country } from "./country";
import { Formation } from "./formation";
import { Position } from "./position";

export interface ApplicationData {
  isLoading: boolean,
  paises: Country[];
  posicoes: Formation[];
  formacoes: Position[];
}

export interface ApplicationDataResponse extends Omit<ApplicationData, 'isLoading'> {}
