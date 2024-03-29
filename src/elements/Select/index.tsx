import { 
  FormControl, 
  FormErrorMessage,
  FormLabel, 
  Select as ChakraSelect, 
  SelectProps as ChakraSelectProps, 
  Text
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, memo } from "react";
import { FieldError } from "react-hook-form";

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, Props> = ({ inputName, label, error = null, options, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel htmlFor={inputName}>{label}</FormLabel>}
      
      <ChakraSelect
        id={inputName}
        name={inputName}
        focusBorderColor="pink.500"
        ref={ref}
        {...rest}
      >
        {options.map(option => (
          <Text as="option" key={option.value} value={option.value}>{option.label}</Text>
        ))}
      </ChakraSelect>

      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}

interface Props extends ChakraSelectProps {
  inputName: string;
  label?: string;
  error?: FieldError;
  options: {
    value: string | number;
    label: string;
  }[]
}

export const Select = memo(forwardRef(SelectBase));