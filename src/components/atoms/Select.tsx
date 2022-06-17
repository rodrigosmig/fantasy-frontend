import { forwardRef, ForwardRefRenderFunction, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import styled from "styled-components";

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, Props> = ({ 
  options,
  ...rest 
}, ref
) => {
  return (
    <SelectElement
      ref={ref}
      {...rest}
    >
      {/* <Option value="" disabled selected>{placeHolder}</Option> */}
      {options.map(option => (
        <Option key={option.value} value={option.value}>{option.label}</Option>
      ))}
    </SelectElement>
  )
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    value: string | number;
    label: string;
  }[];
}

const SelectElement = styled.select`
  margin-top: 0.5rem;
  padding: 0.6rem ;  
  border: 1px solid rgba(255, 255, 255, 0.16);
  background-color: var(--gray-800);
  color: var(--text-body); 

  &:hover {
    background-color: var(--gray-900);
  }

  &:focus {
    outline: 2px solid var(--pink);
  }

  &:invalid {
    color: gray;
  }
`;

const Option = styled.option``;

export const Select = forwardRef(SelectBase);