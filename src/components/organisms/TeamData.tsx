import { useState } from "react";
import styled from "styled-components";
import { useFormation } from "../../contexts/FormationContext";
import { useTeam } from "../../contexts/TeamContext";
import { Loading } from "../atoms/Loading";
import { Select } from "../atoms/Select";

export const TeamData = () => {
  const { team } = useTeam();
  const { formations } = useFormation();
  const [changeFormation, setChangeFormation] = useState(false);
  const [newFormationSelected, setNewFormationSelected] = useState("");
 
  return (   
      <Content>
        <Item>
          <ItemLabel>Time:</ItemLabel>
          <Item className="item_team">{ team?.name }</Item>
        </Item>

        <Item>
          <ItemLabel>Formação:</ItemLabel>
            { changeFormation 
              ? (
                <>
                  <FormationSelect
                    options={formations}
                    value={newFormationSelected}
                    onChange={(e) => setNewFormationSelected(e.target.value)}
                  />
                  <Button onClick={() => setChangeFormation(false)}>Confirmar</Button>
                </>
              ) : (
                <>
                  <Points>{ team?.formation?.formation }</Points>
                  <Button onClick={() => setChangeFormation(true)}>Alterar</Button>
                </>
              )
            }
        </Item>

        <Item>
          <ItemLabel>Total de Pontos:</ItemLabel>
          <Points>{ team?.score }</Points>
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
  )
}

const Content = styled.div`
  width: 90%;
  margin-bottom: 20px;
  font-size: larger;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  border-bottom: 1px solid var(--gray-500);

  &.item_team {
    font-weight: bold;
    border-bottom: 0px;
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

const FormationSelect = styled(Select)`
  margin-top: 0px;

  & option {
    font-size: medium;
    font-weight: bold;
  }
`;