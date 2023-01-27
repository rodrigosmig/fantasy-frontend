import { TeamType } from 'types/team';
import { createStandaloneToast } from "@chakra-ui/react"
import { Player } from "types/player"
import { theme } from "../styles/theme"
import { POSITIONS_ID } from "./enum/positions-id"
import { Position } from 'types/position';
import { Country } from 'types/country';

export const defaultplayer: Player = {
  id: 0,
  nome: "",
  posicao: {} as Position,
  pontos: 0,
  pais: {} as Country
}

export const notify = (
  description: string,
  status: 'success' | 'error' | 'warning' = 'success',
  duration: number = 3000
) => {
  const { toast } = createStandaloneToast({theme: theme})
  
  toast({
    description: description,
    position: "top-right",
    status: status,
    duration: duration,
    isClosable: true,
  })
}


export const getNumberByPosition = (position: string) => {
  return {
    goalkeeper: 1,
    defenders: Number(position.substring(0, 1)),
    midfielders: Number(position.substring(2, 3)),
    attackers: Number(position.substring(4)),
  }
}

export const fillPlayersByPosition = (numberByPosition: TeamType['numberByPosition']) => {
  return {
    goalkeeper: new Array(1).fill(defaultplayer),
    defenders: new Array(numberByPosition.defenders).fill(defaultplayer),
    midfielders: new Array(numberByPosition.midfielders).fill(defaultplayer),
    attackers: new Array(numberByPosition.attackers).fill(defaultplayer),
  }
}

export const getPlayersByPosition = (players: Player[]) => {
  return {
    goalkeeper: players.filter(player => player.posicao.id === POSITIONS_ID.GOALKEEPER),
    defenders: players.filter(player => player.posicao.id === POSITIONS_ID.DEFENDER),
    midfielders: players.filter(player => player.posicao.id === POSITIONS_ID.MIDFIELDER),
    attackers: players.filter(player => player.posicao.id === POSITIONS_ID.ATTACKER)
  }
}