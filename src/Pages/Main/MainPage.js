import styled from "styled-components";
import { mainPink, mainGrey } from "../../constants";
import Item from "./Item";
import axios from "axios";
import { useState, useEffect } from "react";
import Sales from "./Sales";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [products, setProducts] = useState();
  const navigate = useNavigate();
  const width = Math.floor(window.innerWidth / 232);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  useEffect(() => {
    const promise = axios.get(
      `${process.env.REACT_APP_BACK_END_API_URI}/products`
    );
    promise.then((resposta) => {
      console.log(resposta);
      setProducts(shuffle(resposta.data));
    });
    promise.catch((erro) => {
      console.log(erro.response.data);
    });
  }, []);

  if (products === undefined) {
    return <LoadingPage text="Carregando produtos" />;
  } else {
    return (
      <Container>
        <Title>Categorias</Title>
        <Categories>
          <SmartPhones onClick={() => navigate("/produtos/smartphone")}>
            <Text>SmartPhones</Text>
          </SmartPhones>
          <Notebooks onClick={() => navigate("/produtos/notebook")}>
            <Text>Notebooks</Text>
          </Notebooks>
          <Gadgets onClick={() => navigate("/produtos/gadget")}>
            <Text>Gadgets</Text>
          </Gadgets>
        </Categories>
        <LineSection>Uma Seleção Especial para você</LineSection>
        <Items>
          <div>
            {products.slice(0, width).map((product, index) => (
              <Item key={index} product={product}></Item>
            ))}
          </div>
          <div>
            {products.slice(width, 2 * width).map((product, index) => (
              <Item key={index} product={product}></Item>
            ))}
          </div>
        </Items>
        <ContainerSales>
          <Sales products={products}></Sales>
        </ContainerSales>
      </Container>
    );
  }
}
const Container = styled.div`
  text-align: center;
  padding: 2.5em 0;
  font-family: "Poppins";
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-transform: uppercase;
  color: #fff;
  font-weight: 900;
  margin-bottom: 1em;
`;
const Categories = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 3em;
  @media (max-width: 50em) {
    display: block;
    width: 100%;
  }
`;
const SmartPhones = styled.div`
  width: 28%;
  height: 15.6em;
  background-image: url("https://img.global.news.samsung.com/br/wp-content/uploads/2022/03/a53-e1648750898841.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  margin: 0 1em;
  border-radius: 0.31em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 50em) {
    width: 70%;
    margin: 0 4em;
    margin-bottom: 1em;
  }
`;
const Notebooks = styled(SmartPhones)`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrDNF14yJ46llQ_Owv1-J6zmoIHEt3OLGEw&usqp=CAU");
`;
const Gadgets = styled(SmartPhones)`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIQhg99XbODt3o8-eTghlixAfWY7kgfBkpw&usqp=CAU");
`;
const Text = styled.p`
  font-size: 1.5em;
  text-transform: uppercase;
  color: ${mainPink};
  font-weight: 900;
  margin-bottom: 1em;
  background-color: ${mainGrey};
  border-radius: 5em;
  padding: 0.5em;
`;
const LineSection = styled.div`
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${mainPink};
  font-size: 1.5em;
  text-transform: uppercase;
  color: #fff;
  font-weight: 900;
  margin-bottom: 2em;
`;
const Items = styled.div`
  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  margin-bottom: 20px;
`;
const ContainerSales = styled.div`
  width: 100%;
`;
