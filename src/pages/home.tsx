import { NextPage } from "next";
import { Layout } from "../components/Layout/Layout";
import { DadosTime } from "../components/DadosTime/DadosTime";
import { SubmitButton } from "../components/Button/SubmitButton";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { AlterarTimeModal } from "../components/Modal/AlterarTimeModal";
import { useTime } from "../hooks/useTime";

const Index: NextPage = () => {
  const { isLoading } = useTime();
  const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <AlterarTimeModal
          isOpen={isOpen} 
          onClose={onClose}
        />

        <Layout>
          <DadosTime />
          
          <Flex
            justifyContent={"center"}
          >
            { !isLoading && <SubmitButton onClick={onOpen} label="Alterar" /> }
          </Flex>
        </Layout>
      
      </>
    )
  };
  
  export default Index;