import { 
    FormLabel, 
    FormControl, 
    FormErrorMessage, 
    Input as ChakraInput, 
    InputProps as ChakraInputProps ,
    useColorModeValue
  } from '@chakra-ui/react';
  import { forwardRef, ForwardRefRenderFunction } from 'react';
  import { FieldError } from 'react-hook-form'
    
  const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ inputName, label, error=null, ...rest }, ref) => {
    const color = useColorModeValue('gray.50', 'gray.900');
  
    return (
      <FormControl isInvalid={!!error}>
        { !!label && <FormLabel htmlFor={inputName}>{label}</FormLabel>}
        
        <ChakraInput
          id={inputName}
          name={inputName}
          focusBorderColor="pink.500"
          _hover={{
            bgColor: color
          }}
          ref={ref}
          {...rest}
        />
  
        {!!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}
      </FormControl>
    );
  }

  interface Props extends ChakraInputProps {
    inputName: string;
    label?: string;
    error?: FieldError;
  }
  
  export const Input = forwardRef(InputBase);