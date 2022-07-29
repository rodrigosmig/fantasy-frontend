import { memo, ReactNode } from "react";
import styled from "styled-components";
import { FootballPitch } from "../molecules/FootballPitch";
import { Header } from "../molecules/Header";

export const LayoutComponent = ({ children }: Props) => {
  return (
    <Container>
      <Grid>
        <Header />
        <Content>
          <FootballPitch />
        </Content>

        <SideMenu>
          { children }
        </SideMenu>

      </Grid>
    </Container>
  )
}

interface Props {
  children: ReactNode
}

const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 10vh 80vh 10vh;

  grid-template-areas: "header header"
                       "main aside"
                       "footer footer";
`;

const Content = styled.div`
  grid-area: main;
`;

const SideMenu = styled.div`
  grid-area: aside;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  grid-area: footer;
`;

export const Layout = memo(LayoutComponent)