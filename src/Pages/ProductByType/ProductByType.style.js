import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 20px auto 0 auto;
  display: flex;
  gap: 30px;
  @media (min-width: 1200px) {
    max-width: 80%;
    height: 100px;
  }
`;
