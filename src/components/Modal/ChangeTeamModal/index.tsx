import { AlterarTimeForm } from "compositions/Forms/AlterarTimeForm";
import { Modal } from "..";


export const ChangeTeamModal = ({ isOpen, onClose }: CreateCategoryModalProps) => {
  return (
    <Modal
        header="Alterar Time"
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlterarTimeForm onClose={onClose} />
    </Modal>
  )
}

interface CreateCategoryModalProps {
  accountId?: number;
  isOpen: boolean;
  onClose: () => void;
}