import { ReactNode } from "react";
import NextLink from "next/link";
import styled from "styled-components";

export const Link = ({ href, children, passHref = false }: Props) => {
  return (
    <NextLink href={href} passHref>
      <LinkComponent>
        { children }
      </LinkComponent>
    </NextLink>
  )
}

interface Props {
  href: string;
  children: ReactNode;
  passHref?: boolean;
}

const LinkComponent = styled.a`
  cursor: pointer;
  color: var(--pink);
`;