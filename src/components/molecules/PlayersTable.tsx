import { memo } from "react";
import styled from "styled-components";
import { IPlayer } from "../../types/players";

const PlayersTableComponent = ({ players }: Props) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Info</Th>
          <Th>Jogador</Th>
          <Th>Pontos</Th>
        </Tr>
      </Thead>

      <Tbody>
        { players.map(player => (
          <Tr key={ player.id }>
            <Td></Td>
            <Td>{ player.name }</Td>
            <Td>6.1</Td>
            <Td>{ player.score }</Td>
          </Tr>

        )) }

             
      </Tbody>
    </Table>
  )
}

interface Props {
  players: IPlayer[]
}

const Table = styled.table`
  width: 100%;
  text-align: center;
  margin-top: 5px;
`;

const Thead = styled.thead`
  font-weight: bold;
`;

const Th = styled.th`
  padding: 14px 8px;
  background-color: var(--green);
  color: var(--white);

  &:first-child {
    width: 15%;
  }
`;

const Tbody = styled.tbody`
  
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: var(--gray-700);
  }
`;

const Td = styled.td`
  padding: 14px;
`;

export const PlayersTable = memo(PlayersTableComponent)