
import { memo, ReactNode } from 'react';
import { 
  Box,
  Flex,
  FlexProps,
  Heading, 
  Image, 
  useColorMode, 
  useColorModeValue 
} from '@chakra-ui/react';

const AuthLayoutComponent = ({ children, ...rest }: Props) => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Flex
      direction={'column'}
      w={['100vw']}
      h={['100vh']}
      bg={bgColor}
      { ...rest }
    >
      <Flex
        direction="column"
        w="100%"
        h="100%"
        justify="center"
        align="center"
      >
        { children }

      </Flex>
    </Flex>
  )
}

interface Props extends FlexProps {
    children: ReactNode
  }

export const AuthLayout = memo(AuthLayoutComponent);