import styled from 'styled-components'
import { LoginForm } from '../components/organisms/LoginForm'
import { withSsrGuest } from '../utils/withSSRGuest';

const Index = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Index;

export const getServerSideProps = withSsrGuest(async (context) => {
  return {
    props: {}
  }
})