
import { ReactNode } from "react";
import NextLink from "next/link";
import { Box, BoxProps } from "@chakra-ui/react";

export const Link = ({ href, children, passHref = false }: Props) => {
  return (
    <NextLink href={href} passHref>
      <Box as="a"
        _hover={{
          cursor: 'pointer',
          color: 'pink.400'
        }}
      >
        { children }
      </Box>
    </NextLink>
  )
}

interface Props extends BoxProps {
    href: string;
    children: ReactNode;
    passHref?: boolean;
  }