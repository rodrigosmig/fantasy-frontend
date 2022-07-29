import { useTeam } from "../../contexts/TeamContext"
import { F343 } from "../molecules/Formations/F343";
import { F433 } from "../molecules/Formations/F433";
import { F442 } from "../molecules/Formations/F442";

export const Formation = () => {
  const { team } = useTeam();

  const getFormation = () => {
    switch (team?.formation?.formation) {
      case "4-4-2":
        return <F442 />
      case "4-3-3":
          return <F433 />
      case "3-4-3":
          return <F343 />
      default:
        return <F442 />
    }
  }

  return (
    getFormation()
  )
}
