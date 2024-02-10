import { Link } from "react-router-dom";
import { Container, Header, TypeContainer, TypeItem } from "./Type.style";

export default function Type() {
  return (
    <Container>
      <Header>Categorias</Header>
      <TypeContainer>
        <Link to={"/produtos/smartphone"}>
          <TypeItem>Smartphone</TypeItem>
        </Link>
        <Link to={"/produtos/notebook"}>
          <TypeItem>Notebook</TypeItem>
        </Link>
        <Link to={"/produtos/gadget"}>
          <TypeItem>Gadget</TypeItem>
        </Link>
      </TypeContainer>
    </Container>
  );
}
