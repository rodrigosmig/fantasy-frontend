import { Layout } from "../components/Layout";
import { TeamData } from "../components/organisms/TeamData";
import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

const Home = () => {
  return (
    <Layout>
      <TeamData />
    </Layout>
  );
}

export const getServerSideProps = withSSRAuth(async (context) => {
  const apiClient = setupApiClient(context);
  
  await apiClient.get('/auth/me');

  return {
    props: {}
  }
});

export default Home;
