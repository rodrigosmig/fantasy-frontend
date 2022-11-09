import { Box, Flex } from "@chakra-ui/react"
import { memo } from "react"
import { useSession } from "../Contexts/AuthContext";
import { Link } from "../Link/Link";
import { NavItem } from "./ItemNav";

const HeaderComponent = () => {
  const { signOut } = useSession();
  return (
    <Flex
      as="nav"
      alignContent="center"
    >
      <NavItem
        href="/home"
        label="meu time"
      />

      <NavItem
        href="/transfer"
        label="transferência"
      />

      <NavItem
        href="/ranking"
        label="ranking"
      />

      <NavItem
        href="#"
        label="sair"
        onClick={signOut}
      />
    </Flex>
  )
}

export const Header = memo(HeaderComponent);