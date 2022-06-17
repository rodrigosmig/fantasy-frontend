import styled from "styled-components";
import { RegisterForm } from "../components/organisms/RegisterForm";

const Register = () => {
  return (
    <Container>
      <RegisterForm />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default Register;