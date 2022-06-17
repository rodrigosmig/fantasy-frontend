import { IPlayers } from "./players";

export interface ITeam {
  id: number;
  name: string;
  score: number;
  formation: IFormation,
  players: IPlayers[]
}

interface IFormation {
  id: number;
  formation: string;
}