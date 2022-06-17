import { memo } from "react";
import styled from "styled-components"
import { Button } from "../atoms/Button";
import { PaginationItem } from "../molecules/PaginationItem";

const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)].map((_, index) => (from + index + 1)).filter(page => page > 0)
}

const PaginationComponent = ({
  lastPage,
  totalRegisters,
  currentPage = 1,
}: Props) => {
  const siblingsCount = 1;

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];
  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];
    

  return (
    <Container>
      <PaginationButtons>
        <NavigationButton
          label="<"
          disabled={currentPage === 1}
        />


        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem label={String(1)} />
            { currentPage > (2 + siblingsCount) && (
              <Dots>...</Dots>
              ) }
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem key={page} label={String(page)} />
        })}
        
        <PaginationItem label={String(currentPage)} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem key={page} label={String(page)} />
        })}

        {currentPage + siblingsCount < lastPage && (
          <>
            { (currentPage + 1 + siblingsCount) < lastPage && (
              <Dots>...</Dots>
            ) }
            <PaginationItem label={String(lastPage)} />
          </>  
        )}

        <NavigationButton
          label=">"
          disabled={currentPage === lastPage}
        />

      </PaginationButtons>

    </Container>
  )
}

interface Props {
  lastPage: number,
  totalRegisters: number;
  currentPage?: number;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavigationButton = styled(Button)`
  width: 2rem;
  height: 1.8rem;
  margin-right: 5px;
  font-size: 0.8125rem;
  background-color: var(--gray-700);

  &:hover {
    background-color: var(--gray-500);
  }
`;

const Dots = styled.p`
  display: inline-block;
  width: 2rem;
  font-weight: bold;
  text-align: center;
  margin-right: 5px;
`;

export const Pagination = memo(PaginationComponent);