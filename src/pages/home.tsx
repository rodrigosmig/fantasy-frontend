import { AxiosResponse } from "axios";
import styled from "styled-components";
import { Loading } from "../components/atoms/Loading";
import { Layout } from "../components/organisms/Layout";
import { TeamData } from "../components/organisms/TeamData";
import { useSession } from "../contexts/AuthContext";
import { useTeam } from "../contexts/TeamContext";
import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

const Home = () => {
  const { user } = useSession();

  return (
    <Layout>
      <Container>
        <Header>
          <UserName>{ user?.name }</UserName>
        </Header>

        <TeamData />
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.875rem;
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

export const getServerSideProps = withSSRAuth(async (context) => {
  const apiClient = setupApiClient(context);
  
  await apiClient.get('/auth/me');

  return {
    props: {}
  }
});

export default Home;
