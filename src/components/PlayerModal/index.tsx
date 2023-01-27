import { PlayerDetails } from "components/PlayerDetails";
import { ChangeTeamForm } from "compositions/Forms/ChangeTeamForm";
import { Player } from "types/player";
import { Modal } from "../Modal";


export const PlayerModal = ({ player, isOpen, onClose, remove }: PlayerModalProps) => {
  return (
    <Modal
      header={player.nome}
      isOpen={isOpen}
      onClose={onClose}
    >
        <PlayerDetails player={player} remove={remove} />
    </Modal>
  )
}

interface PlayerModalProps {
  player: Player;
  isOpen: boolean;
  onClose: () => void;
  remove: (player: Player) => void;
}