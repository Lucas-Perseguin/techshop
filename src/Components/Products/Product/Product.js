import { useNavigate } from "react-router-dom";
import { Container, Photo, Title, Price } from "./Product.style";

export default function Product({ url, title, price, id }) {
  const navigate = useNavigate();

  const goToProduct = () => navigate("/produto/" + id);

  return (
    <Container onClick={goToProduct}>
      <Photo src={url} />
      <Title>{title}</Title>
      <Price>R$ {price.toFixed(2).replace(".", ",")}</Price>
    </Container>
  );
}
