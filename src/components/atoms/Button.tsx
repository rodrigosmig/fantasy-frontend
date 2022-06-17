import styled from "styled-components";
import { ButtonHTMLAttributes, ReactElement } from "react";
import { Loading } from "./Loading";

export const Button = ({ label, isLoading, icon, ...rest }: Props) => {
  return (
    <ButtonElement
      {...rest}
    >      
      { isLoading 
        ? (
          <Loading />
        ) : (
          icon ? icon : label          
        ) 
      }
    </ButtonElement>
  )
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading?: boolean;
  icon?: ReactElement;
}

const ButtonElement = styled.button`
  height: 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: var(--pink);
  border: 0;
  border-radius: 0.50rem;
  color: var(--white);
  padding: 0 0.75rem;

  &:hover {
    filter: brightness(85%);
  }
  
  &:disabled {
    filter: brightness(100%);
  }
`;
