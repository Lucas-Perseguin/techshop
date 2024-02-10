import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 900px) {
    display: none !important;
  }
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

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 0 0 10px;
  a {
    text-decoration: none;
  }
`;

export const TypeItem = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.05em;
  text-decoration: none;
  color: #ffffff;
`;
