import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.header`
  padding: 10px 20px 10px 0;
  border-bottom: 1px solid #ebebeb;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

export const ProductList = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 660px) {
    justify-content: flex-start;
  }
`;
