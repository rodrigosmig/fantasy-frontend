import { Flex, useDisclosure } from "@chakra-ui/react";
import { Button } from "elements/Button";
import { TeamData } from "components/TeamData";
import { NextPage } from "next";

import { ChangeTeamModal } from "../components/Modal/ChangeTeamModal";
import { Layout } from "compositions/Layout";

const Index: NextPage = () => {
  const isLoading = false;
  const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <ChangeTeamModal
          isOpen={isOpen} 
          onClose={onClose}
        />

        <Layout>
          <TeamData />
          
          <Flex
            justifyContent={"center"}
          >
            { !isLoading && <Button onClick={onOpen} label="Alterar" /> }
          </Flex>
        </Layout>
      
      </>
    )
  };
  
  export default Index;