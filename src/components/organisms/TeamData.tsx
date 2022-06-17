import styled from "styled-components";
import { useSession } from "../../contexts/AuthContext";

export const TeamData = () => {
  const { user } = useSession();
  return (
    <Container>
      <Header>
        <UserName>{ user?.name }</UserName>
      </Header>
      <Content>
        <Item>
          <ItemLabel>Time:</ItemLabel>
          <Item className="item_team">{ user?.team?.name }</Item>
        </Item>

        <Item>
          <ItemLabel>Formação:</ItemLabel>
          <Points>4-4-2</Points>
          <Button>Alterar</Button>
        </Item>

        <Item>
          <ItemLabel>Total de Pontos:</ItemLabel>
          <Points>1366</Points>
        </Item>

        <Item>
          <ItemLabel>Participação em Ligas:</ItemLabel>
          <Points>4</Points>
        </Item>

        <Item>
          <ItemLabel>Pontos da Rodada:</ItemLabel>
          <Points>36</Points>
        </Item>
      </Content>
    
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
`;

const Content = styled.div`
  width: 90%;
  margin-bottom: 20px;
  font-size: larger;
`;

const Header = styled.header`
  width: 90%;
  border-bottom: 1px solid var(--gray-500);
  text-align: center;
`;

const UserName = styled.p`
  font-size: x-large;
  font-weight: bold;
  padding: 20px;
  background-color: var(--gray-700);
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  border-bottom: 1px solid var(--gray-500);

  &.item_team {
    font-weight: bold;
  }
`;

const ItemLabel = styled.label`
  display: inline-block;
  padding: 15px;
`
const Points = styled.span`
  font-weight: bolder;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 4px 8px;
  color: var(--text-body);
  font-weight: bold;
  border-radius: 5px;
  background-color: var(--pink);

  &:hover {
    filter: brightness(85%)
  }
`;