import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { mainGrey, mainPink } from "../../constants";
import LoadingPage from "../LoadingPage/LoadingPage";
import ProductInCart from "./ProductInCart";
import Input from "../../Components/Forms/Input/Input";
import InputGroup from "../../Components/Forms/Input/InputGroup";
import Label from "../../Components/Forms/Input/Label";
import Button from "../../Components/Forms/Button/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Container = styled.div`
  width: 100%;
  height: 100;
  background-color: ${mainGrey};
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 30px;
  width: 100%;
  color: white;
  ion-icon {
    font-size: 40px;
  }
  h1 {
    font-size: 30px;
    font-weight: 900;
  }
`;

const MainDataContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  background-color: white;
  padding: 20px;
  border: 1px solid ${mainPink};
  border-radius: 20px;
`;

const Productscontainer = styled.div`
  background-color: white;
  border-radius: 6px;
`;

const Infos = styled.div`
  width: 600px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Value = styled.div`
  width: 100%;
  font-size: 22px;
  font-weight: 700;
  color: black;
`;

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [totalValue, setTotalValue] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [adress, setAdress] = useState("");
  const [cellphone, setCellphone] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const localCart = JSON.parse(localStorage.getItem("cart")) ?? [];
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    if (token && localCart) {
      localCart.forEach((product) => {
        const promisse = axios.post(
          `${process.env.REACT_APP_BACK_END_API_URI}/add/${product._id}`,
          { amount: product.amount },
          config
        );
        promisse.then((response) => {});
        promisse.catch((error) => {
          return toast.error(
            `Erro: ${error.response.status}\nAlgo deu errado, tente novamente mais tarde!`
          );
        });
      });
      localStorage.removeItem("cart");
    }
    if (!token) {
      setCart(localCart);
      setLoading(false);
      const auxTotalValue = localCart.reduce(
        (sum, product) => sum + product.price * product.amount,
        0
      );
      setTotalValue(auxTotalValue);
    } else {
      const promisse = axios.get(
        `${process.env.REACT_APP_BACK_END_API_URI}/cart`,
        config
      );
      promisse.then((response) => {
        setCart(response.data);
        const auxTotalValue = response.data.reduce(
          (sum, product) => sum + product.price * product.amount,
          0
        );
        setTotalValue(auxTotalValue);
      });
      promisse.catch((error) => {
        return toast.error(
          `Erro: ${error.response.status}\n,Algo deu errado tente novamente mais tarde!`
        );
      });
      const userFound = axios.get(
        `${process.env.REACT_APP_BACK_END_API_URI}/user`,
        config
      );
      userFound.then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setCpf(response.data.cpf);
      });
      setLoading(false);
    }
  }, []);

  function handlePurchase() {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.warn("Para finalizar sua compra você deve estar logado!");
      navigate("/login");
    } else {
      if (!(name && email && cpf && adress && cellphone)) {
        return toast.warn("Preencha todos os campos!");
      }
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const promisse = axios.delete(
        `${process.env.REACT_APP_BACK_END_API_URI}/deleteCart`,
        config
      );
      promisse.then((response) => {});
      promisse.catch((error) => {
        toast.error(
          `Erro: ${error.response.status}\nAlgo deu errado, tente novamente mais tarde!`
        );
      });
      const products = cart.map((product) => ({
        productId: product._id,
        amount: product.amount,
      }));
      const data = { products: products, name, email, cpf, adress, cellphone };
      const purchase = axios.post(
        `${process.env.REACT_APP_BACK_END_API_URI}/purchase`,
        data,
        config
      );
      purchase.then((response) => {
        toast.success("Sua compra foi realizada com sucesso!");
        navigate("/");
      });
      purchase.catch((error) => {
        toast.error(
          `Erro: ${error.response.status}\nAlgo deu errado, tente novamente mais tarde!`
        );
      });
    }
  }

  if (isLoading) {
    return <LoadingPage text="Carregando itens do carrinho!" />;
  } else {
    return (
      <Container>
        <Title>
          <ion-icon name="bag-handle-outline"></ion-icon>
          <h1>CARRINHO</h1>
        </Title>
        <MainDataContainer>
          <Productscontainer>
            {cart ? (
              cart.map((product) => (
                <ProductInCart
                  key={product._id}
                  product={product}
                  cart={cart}
                  setCart={setCart}
                  totalValue={totalValue}
                  setTotalValue={setTotalValue}
                />
              ))
            ) : (
              <h1>Você ainda não possui produtos no seu carrinho!</h1>
            )}
          </Productscontainer>
          <Infos>
            <Label>DADOS DO DESTINATÁRIO</Label>
            <Inputs>
              <InputGroup>
                <Label>NOME</Label>
                <Input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <Label>EMAIL</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <Label>CPF</Label>
                <Input
                  type="text"
                  value={cpf}
                  onChange={(event) => setCpf(event.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <Label>ENDEREÇO</Label>
                <Input
                  type="text"
                  value={adress}
                  onChange={(event) => setAdress(event.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <Label>NUMERO DE CELULAR</Label>
                <Input
                  type="text"
                  value={cellphone}
                  onChange={(event) => setCellphone(event.target.value)}
                />
              </InputGroup>
            </Inputs>
            <Value>
              Valor total:{" "}
              {totalValue.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Value>
            <Button disabled={!cart} onClick={handlePurchase}>
              CONFIRMAR COMPRA
            </Button>
          </Infos>
        </MainDataContainer>
      </Container>
    );
  }
}
