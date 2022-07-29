export interface IPlayer {
  id: number;
  name: string;
  position: IPosition;
  score: string;
  country: ICountry
}

export interface ICountry {
  id: number;
  name: string;
}

export interface IPosition {
  id: number;
  name: string;
}