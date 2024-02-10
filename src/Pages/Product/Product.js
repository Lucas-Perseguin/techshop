import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Anchor from "../../Components/Forms/Anchor/Anchor";
import Button from "../../Components/Forms/Button/Button";
import { mainGrey, mainPink } from "../../constants";
import LoadingPage from "../LoadingPage/LoadingPage";
import { toast } from "react-toastify";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  background-color: ${mainGrey};
  hr {
    width: 100%;
    background-color: ${mainPink};
    height: 2px;
    margin-bottom: 30px;
  }
  img {
    width: 608px;
    height: 475px;
    background: #ffffff;
    border: 2px solid #ff4791;
    border-radius: 10px;
    margin-bottom: 40px;
  }
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 900;
  color: white;
  margin-bottom: 10px;
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  gap: 6px;
  ion-icon {
    color: ${mainPink};
    width: 40px;
    height: 40px;
  }
`;

const Price = styled.h1`
  color: white;
  font-size: 46px;
  font-weight: 900;
  margin-bottom: 20px;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ion-icon {
    width: 46px;
    height: 50px;
    :hover {
      cursor: pointer;
      color: white;
    }
  }
  margin-bottom: 90px;
`;

const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  button {
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    background-color: ${mainGrey};
    color: white;
    width: 25px;
    cursor: pointer;
  }
  div {
    width: 50px;
    height: 50px;
    text-align: center;
    color: black;
    background-color: white;
    line-height: 50px;
    font-size: 20px;
  }
`;

const Description = styled.p`
  width: 100%;
  word-wrap: break-word;
  background-color: white;
  color: black;
  font-size: 22px;
  font-weight: 400;
  border: none;
  border-radius: 5px;
  padding: 70px;
  margin-top: 40px;
`;

const AnchorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 70px;
`;

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(1);
  const [stars, setStars] = useState([]);
  const isLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();

  function createStars(num) {
    const auxStars = [];
    for (let i = 0; i < 5; i++) {
      if (i < num) {
        auxStars.push(<ion-icon name="star"></ion-icon>);
      } else {
        auxStars.push(<ion-icon name="star-outline"></ion-icon>);
      }
    }
    setStars(auxStars);
  }

  useEffect(() => {
    const promisse = axios.get(
      `${process.env.REACT_APP_BACK_END_API_URI}/product/${productId}`
    );
    promisse.then((response) => {
      setProduct(response.data);
      setPrice(response.data.price);
      createStars(response.data.stars);
    });
    promisse.catch((error) => {
      return toast.error(
        `Erro: ${error.response.status}\n, Algo deu errado tente novamente mais tarde!`
      );
    });
  }, []);

  function handleBuy(isBuy) {
    if (amount === 0) {
      toast.warn("Você deve selecionar uma quantidade!");
      return;
    }
    if (!isLoggedIn) {
      const cart = localStorage.getItem("cart");
      if (!cart) {
        const productObj = {
          ...product,
          amount,
        };
        localStorage.setItem("cart", `${JSON.stringify([productObj])}`);
      } else {
        const cartObj = JSON.parse(cart);
        const productFound = cartObj.find(
          (product) => product._id === productId
        );
        if (!productFound) {
          const productObj = {
            ...product,
            amount,
          };
          cartObj.push(productObj);
          localStorage.setItem("cart", JSON.stringify(cartObj));
        } else {
          cartObj.forEach((product) => {
            if (product._id === productId) {
              product.amount += amount;
            }
          });
          localStorage.setItem("cart", `${JSON.stringify(cartObj)}`);
        }
      }
      if (isBuy) {
        navigate("/carrinho");
      } else {
        toast.success("Item(s) adicionado(s) ao carrinho!");
      }
    } else {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const promisse = axios.post(
        `${process.env.REACT_APP_BACK_END_API_URI}/add/${productId}`,
        { amount },
        config
      );
      promisse.then((response) => {
        if (isBuy) {
          navigate("/carrinho");
        } else {
          toast.success("Item(s) adicionado(s) ao carrinho!");
        }
      });
      promisse.catch((error) => {
        return toast.error(
          `Erro: ${error.response.status}\n, Algo deu errado tente novamente mais tarde!`
        );
      });
    }
  }
  if (!product) {
    return <LoadingPage text="Carregando informações do produto" />;
  } else {
    return (
      <Container>
        <AnchorContainer>
          <Anchor to={`/produtos/${product.type}`}>
            {product.type?.toUpperCase()}
          </Anchor>
        </AnchorContainer>
        <img src={product.image} alt="Imagem do produto" />
        <Title>{product.name}</Title>
        <Stars>{stars.map((star) => star)}</Stars>
        <Price>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>
        <hr />
        <Buttons>
          <ion-icon
            name="bag-handle-outline"
            onClick={() => handleBuy(false)}
          ></ion-icon>
          <Button onClick={() => handleBuy(true)}>COMPRAR</Button>
          <Counter>
            <button
              disabled={amount === 0}
              onClick={() => setAmount(amount - 1)}
            >
              -
            </button>
            <div>{amount}</div>
            <button onClick={() => setAmount(amount + 1)}>+</button>
          </Counter>
        </Buttons>
        <h1>DESCRIÇÃO</h1>
        <Description>{product.description}</Description>
      </Container>
    );
  }
}
