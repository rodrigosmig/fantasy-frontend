import { ChangeTeamForm } from "compositions/Forms/ChangeTeamForm";
import { Modal } from "../Modal";


export const ChangeTeamModal = ({ isOpen, onClose }: CreateCategoryModalProps) => {
  return (
    <Modal
        header="Alterar Time"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ChangeTeamForm onClose={onClose} />
    </Modal>
  )
}

interface CreateCategoryModalProps {
  accountId?: number;
  isOpen: boolean;
  onClose: () => void;
}