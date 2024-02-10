import styled from "styled-components";

const Container = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  font-size: 26px;
  letter-spacing: 0.05em;
  text-decoration: none !important;
  user-select: none;
  cursor: pointer;
  @media (min-width: 1200px) {
    font-size: 30px;
  }
  color: #ff4791;
`;

export default function Logo() {
  return <Container>TECH SHOP</Container>;
}
