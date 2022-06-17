import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import styled from "styled-components";
import { Input } from "../atoms/Input";

const InputFieldBase: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ 
  inputName,
  type,
  label, 
  error, 
  ...rest 
}, ref
) => {
  return (
    <Container>
      { !!label && <Label htmlFor={inputName}>{label}</Label> }

      <Input
        id={inputName}
        name={inputName}
        type={type}
        ref={ref}
        {...rest}
      />

    {!!error && <Error>{error.message}</Error>}
    </Container>
  )
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputName: string;
  type: string
  label?: string;
  error?: FieldError;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Error = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--red);
  font-style: italic;
`;

export const InputField = forwardRef(InputFieldBase);