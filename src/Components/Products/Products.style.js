import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
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

export const Page = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: white;
  padding-bottom: 20px;
  padding-right: 4em;
`;
