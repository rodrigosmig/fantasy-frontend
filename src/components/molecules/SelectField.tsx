import { forwardRef, ForwardRefRenderFunction, memo, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import styled from "styled-components";
import { Select } from "../atoms/Select";

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, Props> = ({ 
  name,
  label,
  error,
  options,
  ...rest 
}, ref
) => {
  return (
    <Container>
      { !!label && <Label htmlFor={name}>{label}</Label> }

      <Select
        id={name}
        name={name}
        ref={ref}
        {...rest}
        options={options}
      />

    {!!error && <Error>{error.message}</Error>}
    </Container>
  )
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  error?: FieldError;
  options: {
    value: string | number;
    label: string;
  }[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Error = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--red);
  font-style: italic;
`;

export const SelectField = memo(forwardRef(SelectBase))