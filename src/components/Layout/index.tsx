import { ReactNode, useState } from "react";
import styled from "styled-components";
import { Formation433 } from "../Formation433";
import { Formation442 } from "../Formation442";
import { FootballPitch } from "./FootballPitch";
import { Header } from "../molecules/Header";

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

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const [formation, setFormation] = useState(442);

  const getFormation = (formation: number) => {
    switch (formation) {
      case 442:
        return <Formation442 />
      case 433:
          return <Formation433 />   
      default:
        break;
    }
  }

  return (
    <Container>
      <Grid>
        <Header />
        <Content>
          <FootballPitch>
            { getFormation(formation) }
          </FootballPitch>
        </Content>

        <SideMenu>
          { children }
        </SideMenu>

      </Grid>
    </Container>
  )
}