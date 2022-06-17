import styled from "styled-components";

export const PlayersTable = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Info</Th>
          <Th>Goleiros</Th>
          <Th>R$</Th>
          <Th>Pontos</Th>
        </Tr>
      </Thead>

      <Tbody>
        <Tr>
          <Td></Td>
          <Td>Alisson</Td>
          <Td>6.1</Td>
          <Td>145</Td>
        </Tr>

        <Tr>
          <Td></Td>
          <Td>Ederson</Td>
          <Td>5.1</Td>
          <Td>130</Td>
        </Tr>

        <Tr>
          <Td></Td>
          <Td>Courtois</Td>
          <Td>3.1</Td>
          <Td>120</Td>
        </Tr>

        <Tr>
          <Td></Td>
          <Td>De Gea</Td>
          <Td>5.7</Td>
          <Td>140</Td>
        </Tr>

        <Tr>
          <Td></Td>
          <Td>Alisson</Td>
          <Td>6.1</Td>
          <Td>145</Td>
        </Tr>

        <Tr>
          <Td></Td>
          <Td>Ederson</Td>
          <Td>5.1</Td>
          <Td>130</Td>
        </Tr>

        <Tr>
          <Td></Td>
          <Td>Courtois</Td>
          <Td>3.1</Td>
          <Td>120</Td>
        </Tr>

        <Tr>
          <Td></Td>
          <Td>De Gea</Td>
          <Td>5.7</Td>
          <Td>140</Td>
        </Tr>

        <Tr>
          <Td></Td>
          <Td>Alisson</Td>
          <Td>6.1</Td>
          <Td>145</Td>
        </Tr>

        <Tr>
          <Td></Td>
          <Td>Ederson</Td>
          <Td>5.1</Td>
          <Td>130</Td>
        </Tr>        
      </Tbody>
    </Table>
  )
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