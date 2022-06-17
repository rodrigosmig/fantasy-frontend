import styled from "styled-components"
import shirt from '../../assets/images/shirt.png'

const Image = styled.img`
  width: 70px;
  height: 70px;
`;

export const Shirt = () => {
  return (
    <Image src={shirt.src} />
  )
}