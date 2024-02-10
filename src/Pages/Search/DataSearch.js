import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { mainPink } from '../../constants';

export default function DataSearch(props) {
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 12.5em;
  height: 390px;
  text-align: center;
  margin: 0 1em 1em 1em;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid ${mainPink};
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 10em;
  background-color: black;
  border-radius: 0.31em;
  margin-bottom: 0.5em;
`;
const ProductName = styled.p`
  width: 100%;
  color: black;
  font-size: 0.8em;
  line-height: 1.5;
`;
const Price = styled.p`
  width: 100%;
  color: black;
  font-size: 1em;
  font-weight: 700;
  margin-top: 25px;
`;
