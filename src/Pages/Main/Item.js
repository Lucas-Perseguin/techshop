import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mainPink } from '../../constants';
export default function Item(props) {
  const { product } = props;
  const navigate = useNavigate();

  const realPrice = product.price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <>
      <Container onClick={() => navigate(`/produto/${product._id}`)}>
        <Image src={product.image} alt="Product picture"></Image>
        <ProductName>{product.name}</ProductName>
        <Price>{realPrice}</Price>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 12.5em;
  height: 290px;
  text-align: center;
  margin: 0 1em 1em 1em;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid ${mainPink};
`;
const Image = styled.img`
  width: 100%;
  height: 10em;
  background-color: black;
  border-radius: 0.31em;
  margin-bottom: 0.5em;
  cursor: pointer;
`;
const ProductName = styled.p`
  width: 100%;
  color: black;
  font-size: 1em;
  line-height: 1.5;
  font-weight: 500;
  cursor: pointer;
`;
const Price = styled.p`
  width: 100%;
  color: black;
  font-size: 1.2em;
  font-weight: 700;
  margin-top: 10px;
`;
