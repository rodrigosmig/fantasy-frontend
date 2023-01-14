import { 
  Button,
  AlertDialog,
  AlertDialogBody, 
  AlertDialogCloseButton, 
  AlertDialogContent, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogOverlay
} from "@chakra-ui/react"
import { useRef } from "react"

export const Alert = ({ isOpen, onClose }: AlertDialogProps) => {

  const cancelRef = useRef<HTMLButtonElement>(null)

  return (
    <AlertDialog
      motionPreset='slideInBottom'
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Tem certeza?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          Ao alterar a formação todos os jogadores serão removidos do time!
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} colorScheme='red' onClick={onClose}>
            OK
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
}