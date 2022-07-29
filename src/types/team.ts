import { IFormation } from "./formation";
import { IPlayer } from "./players";


export interface ITeam {
  id: number;
  name: string;
  score: number;
  formation: IFormation;
  //players: IPlayer[]
}

export interface ITeamContextData {
  team: ITeam;
  setTeam: (team: ITeam) => void;
/*   formation: IFormation | undefined;
  isLoading: boolean;
  changeFormation: (formation: IFormation) => void; */
}