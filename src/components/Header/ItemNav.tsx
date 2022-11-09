import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { memo } from "react"
import { Link } from "../Link/Link";

const NavItemComponent = ({ href, label, onClick }: NavItemProps) => {
  const { asPath } = useRouter();
  
  const isActive = () => {
    return asPath === href;
  }

  return (
    <Link href={href} passHref>
      <Flex
        alignItems={["center"]}
        h={"45px"}
        p="0 1rem"
        mr="5px"
        bg={"gray.50"}
        borderRadius="5px 5px 0 0"
        textTransform={"uppercase"}
        bgColor={ isActive() ? "white" : "green.500" }
        color={ isActive() ? "pink.500": "white"}
        _hover={{
          filter: isActive() ? 'brightness(100%)' : 'brightness(80%)'
        }}
        onClick={onClick}
      >
        { label }
      </Flex>
    </Link>
  )
}

interface NavItemProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export const NavItem = memo(NavItemComponent);