import { Flex } from "@chakra-ui/react"
import { NavItem } from "elements/NavItem";
import { memo } from "react"
import { useSession } from "store/context/AuthContext";

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