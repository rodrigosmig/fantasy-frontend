import NextLink from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";
import styled from "styled-components";
import { useSession } from "../../contexts/AuthContext";
import { Link } from "./Link";

const HeaderComponent = () => {
  const { asPath } = useRouter();
  const { signOut } = useSession();

  const isActive = (link: string) => {
    return asPath === link
  }

  return (
    <Container>
      <NavMenu>
        <Link href="/home" passHref>
          <NavItems isActive={isActive("/home")}>
            MEU TIME
          </NavItems>
        </Link>

        <Link href="/transfer" passHref>
          <NavItems isActive={isActive("/transfer")}>
            TRANSFERÊNCIA
          </NavItems>        
        </Link>

        <Link href="/ranking" passHref>
          <NavItems isActive={isActive("/ranking")}>
            RANKING
          </NavItems>
        </Link>


          <NavItems className="header_logout" isActive={false} onClick={signOut}>
            Sair
          </NavItems>


      </NavMenu>
    </Container>
  )
}

const Container = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const NavMenu = styled.nav`
  display: flex;
  align-content: center;
`

interface NavItemsProps {
  isActive: boolean;
}

const NavItems = styled.div<NavItemsProps>`
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin-right: 5px;
  border-radius: 5px 5px 0 0;
  background-color: ${(props) => props.isActive ? 'var(--gray-50)' : 'var(--green)'};
  color: ${(props) => props.isActive ? 'var(--pink)' : 'var(--white)'};

  &.header_logout {
    cursor: pointer;
  }

  &:hover {
    filter: ${(props) => props.isActive ? 'brightness(100%)' : 'brightness(80%)'};
  }
`;

export const Header = memo(HeaderComponent)