import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
  padding: 30px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  gap: 25px;
  @media (min-width: 900px) {
    padding: 30px 60px 60px 60px;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  font-size: 42px;
  letter-spacing: 0.05em;
  color: #2c2c2c;
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
