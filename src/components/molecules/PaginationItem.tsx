import { memo } from "react"
import styled from "styled-components";
import { Button } from "../atoms/Button";

const PaginationItemComponent = ({ label, isCurrent = false}: Props) => {
  return (
    <NavigationButton 
      className={isCurrent ? 'current_page' : ''}
      label={label} 
      disabled={isCurrent}
    />
  )
}

interface Props {
  label: string;
  isCurrent?: boolean;
}

const NavigationButton = styled(Button)`
  width: 2rem;
  padding: 0px;
  height: 1.8rem;
  margin-right: 5px;
  font-size: 0.8125rem;
  background-color: var(--gray-700);

  &:hover {
    background-color: var(--gray-500);
  }

  &.current_page {
    background-color: var(--pink);
    cursor: default;
  }
`;

export const PaginationItem = memo(PaginationItemComponent);

