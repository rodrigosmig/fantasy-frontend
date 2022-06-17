import styled from "styled-components"
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { FiSearch } from "react-icons/fi";

export const Search = ({...rest}) => {
  return (
    <Container>
      <InputCompnent 
        type="text"
        name="searchName"
        {...rest} 
      />
      
      <ButtonComponent
        label="Search" 
        isLoading={false} 
        icon={<SearchIcon/>}
      />
    </Container>
  )
}

const  Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const InputCompnent = styled(Input)`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

const ButtonComponent = styled(Button)`
  height: 2.3rem;
  border: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const SearchIcon = styled(FiSearch)`

`

