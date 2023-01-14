import { Flex, useDisclosure } from "@chakra-ui/react";
import { TeamData } from "components/TeamData";
import { Button } from "elements/Button";
import { NextPage } from "next";

import { Layout } from "compositions/Layout";
import { useSelector } from "hooks/useSelector";
import { ChangeTeamModal } from "../components/Modal/ChangeTeamModal";

const Index: NextPage = () => {
  const { isLoading: IsLoadingTeam, team } = useSelector(({team}) => team);

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
          { !IsLoadingTeam && (
            <Button
              colorScheme="pink"
              size={"sm"} 
              onClick={onOpen} 
              label="Alterar"
            />
          )}
        </Flex>
      </Layout>
    
    </>
  )
};
  
export default Index;