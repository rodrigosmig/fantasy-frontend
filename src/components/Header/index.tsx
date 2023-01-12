import { Flex } from "@chakra-ui/react"
import { NavItem } from "elements/NavItem";
import { useDispatch } from "hooks/useDispatch";
import Router from "next/router";
import { memo, useCallback } from "react"
import { useSession } from "store/context/AuthContext";
import { logout } from "store/slices/authSlice";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  
  const signOut = useCallback(() => {
    dispatch(logout());
    Router.push('/')
  }, [dispatch])

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