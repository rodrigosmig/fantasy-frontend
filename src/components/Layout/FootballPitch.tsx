import { ReactNode } from "react";
import styled from "styled-components";
import Field from "../../assets/images/football_pitch.png";
 
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Field.src});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 90% 90%;
`

const Content = styled.div`
  width: 65%;
  height: 80%;
  margin-bottom: 20px;
`

interface Props {
  children: ReactNode;
}

export const FootballPitch = ({children}: Props) => {
  return (
    <Container>
      <Content>
        { children }
      </Content>
    </Container>

  )
}