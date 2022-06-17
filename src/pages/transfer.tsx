import styled from "styled-components";
import { SelectField } from "../components/molecules/SelectField";
import { Layout } from "../components/Layout";
import { Search } from "../components/molecules/SearchField";
import { PlayersTable } from "../components/molecules/PlayersTable";
import { Pagination } from "../components/organisms/Pagination";
import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

const Transfer = () => {
  const countriesOption = [
    {
      value: 1,
      label: "Brasil"
    },
    {
      value: 2,
      label: "Inglaterra"
    },
  ];

  const positionOptions = [
    {
      value: 1,
      label: "Atacante"
    },
    {
      value: 2,
      label: "Zagueiro"
    },
  ];


  return (
    <Layout>
      <Container>
        <Content>
          <Item>
            <SelectField
              label="País"
              name="country"
              options={countriesOption}
            />
          </Item>

          <Item>
            <SelectField
              label="Posição"
              name="countries"
              placeHolder="Filtrar por posição"
              options={positionOptions}
            />
          </Item>

          <Item>
            <Search placeholder="Nome do Jogador" />
          </Item>
          
          <Item>
            <PlayersTable />
          </Item>    

          <Item>
            <Pagination
              lastPage={10}
              currentPage={1}
              totalRegisters={1000}
            />
          </Item>
          
        </Content>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.875rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
`;

const Item = styled.div`
  width: 95%;
  margin-bottom: 1rem;

  & input {
    width: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const getServerSideProps = withSSRAuth(async (context) => {
  const apiClient = setupApiClient(context);
  
  await apiClient.get('/auth/me');

  return {
    props: {}
  }
})

export default Transfer;