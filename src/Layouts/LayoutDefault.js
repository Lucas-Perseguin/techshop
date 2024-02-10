import styled from "styled-components";
import Header from "../Components/Header/Header";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow-y: hidden;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2c2c2c;
  overflow: auto;
  word-wrap: break-word;
`;

export default function LayoutDefault({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>      
    </Container>
  );
}
