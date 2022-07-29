import styled, { keyframes } from "styled-components"

export const Loading = () => {
  return (
    <Container>
      <LoadingComponent />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const spin = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`

export const LoadingComponent = styled.div`
  border: 0.2em solid rgba(0, 0, 0, 0.2);
  border-top: 0.2em solid var(--gray-100);
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 0.6s linear infinite;
`;