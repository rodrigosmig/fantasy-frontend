import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import styled from "styled-components";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ 
  id,
  ...rest 
}, ref
) => {
  return (
    <InputElement
      id={id}
      ref={ref}
      {...rest}
    />
  )
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputElement = styled.input`
  padding: 0.6rem ;
  border-radius: 0.375rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background-color: var(--gray-800);
  color: var(--text-body); 

  &:hover {
    background-color: var(--gray-900);
  }

  &:focus {
    outline: 2px solid var(--pink);
  }
`;

export const Input = forwardRef(InputBase);