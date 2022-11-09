import { AlterarTimeForm } from "../Form/AlterarTimeForm";
import { Modal } from "./Modal";


export const AlterarTimeModal = ({ isOpen, onClose }: CreateCategoryModalProps) => {
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