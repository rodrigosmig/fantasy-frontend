import { TeamType } from 'types/team';
import { createStandaloneToast } from "@chakra-ui/react"
import { Player } from "types/player"
import { theme } from "../styles/theme"
import { PositionsID } from "./enum/positions-id"
import { Position } from 'types/position';
import { Country } from 'types/country';

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
    defence: Number(position.substring(0, 1)),
    midfield: Number(position.substring(2, 3)),
    attack: Number(position.substring(4)),
  }
}

export const fillPlayersByPosition = (numberByPosition: TeamType['numberByPosition']) => {
  const player: Player = {
    id: 0,
    nome: "",
    posicao: {} as Position,
    pontos: 0,
    pais: {} as Country
  }

  return {
    goalkeeper: player,
    defenders: new Array(numberByPosition.defence).fill(player),
    midfielder: new Array(numberByPosition.midfield).fill(player),
    attacker: new Array(numberByPosition.attack).fill(player),
  }
}

export const getPlayersByPosition = (players: Player[]) => {
  return {
    goalkeeper: players.filter(player => player.posicao.id === PositionsID.GOALKEEPER)[0],
    defenders: players.filter(player => player.posicao.id === PositionsID.DEFENDER),
    midfielder: players.filter(player => player.posicao.id === PositionsID.MIDFIELDER),
    attacker: players.filter(player => player.posicao.id === PositionsID.ATTACKER)
  }
}