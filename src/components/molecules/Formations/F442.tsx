import styled from "styled-components";
import { Shirt } from "../../atoms/Shirt";

export const F442 = () => {
  return (
    <Container>
      <Forwards>
        <Shirt />
        <Shirt />
      </Forwards>

      <Middlefilders>
        <Shirt />
        <Shirt />
        <Shirt />
        <Shirt />
      </Middlefilders>

      <Defenders>
        <Shirt />
        <Shirt />
        <Shirt />
        <Shirt />
      </Defenders>

      <GoalKeeper>
        <Shirt />
      </GoalKeeper>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Forwards = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Middlefilders = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Defenders = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const GoalKeeper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;