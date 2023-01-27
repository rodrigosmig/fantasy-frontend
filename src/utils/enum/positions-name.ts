interface PositionsNameType {
  [key: string]: "goalkeeper" | "defenders" | "midfielders" | "attackers";
}

export const POSITIONS_NAME: PositionsNameType = {
  "Goleiro": "goalkeeper",
  "Defesa": "defenders",
  "Meio-Campo": "midfielders",
  "Atacante": "attackers"
}