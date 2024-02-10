import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Anchor from "../../Components/Forms/Anchor/Anchor";
import Button from "../../Components/Forms/Button/Button";
import Input from "../../Components/Forms/Input/Input";
import InputGroup from "../../Components/Forms/Input/InputGroup";
import Label from "../../Components/Forms/Input/Label";
import { isLoggedInContext } from "../../Context/isLoggedInContext";
import { isLoggedIn } from "../../Utils/auth";
import { Container, Form, Title, Inputs } from "./Login.style";
import { toast } from "react-toastify";

export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const tokenContext = useContext(isLoggedInContext);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = isLoggedIn();
    promise.then(() => {
      navigate("/");
    });
    promise.catch((msg) => console.error(msg));
  }, [navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    const promise = axios.post(
      process.env.REACT_APP_BACK_END_API_URI + "/sign-in",
      formValues
    );

    promise.then(({ data }) => {
      localStorage.token = data.token;
      tokenContext.setIsToken((prev) => true);
      navigate("/");
    });

    promise.catch((err) => {
      console.log(err);
      toast.error("Ocorreu um erro\nVerifique o seu email e senha");
    });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>LOGIN</Title>
        <Inputs>
          <InputGroup>
            <Label>EMAIL</Label>
            <Input
              type="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </InputGroup>
          <InputGroup>
            <Label>SENHA</Label>
            <Input
              type="password"
              value={formValues.password}
              onChange={(e) =>
                setFormValues((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </InputGroup>
        </Inputs>
        <Button>ENTRAR</Button>
        <Anchor to="/cadastro">NÃO POSSUI UMA CONTA?</Anchor>
      </Form>
    </Container>
  );
}
