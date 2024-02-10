import styled from "styled-components";
import { mainPink, mainGrey } from "../../constants";
import { useNavigate } from "react-router-dom";

export default function Sales(props) {
  const { products } = props;
  const navigate = useNavigate();

  return (
    <>
      <SaleLine>Ofertas</SaleLine>
      <Title>Categorias Especiais</Title>
      <ContainerBoxes>
        <Box1 onClick={() => navigate("/produtos/smartphone/sale")}>
          <Text>SmartPhones</Text>
        </Box1>
        <MiniBoxes>
          <Box2 onClick={() => navigate("/produtos/notebook/sale")}>
            <Text>Notebooks</Text>
          </Box2>
          <Box3 onClick={() => navigate("/produtos/gadget/sale")}>
            <Text>Gadgets</Text>
          </Box3>
        </MiniBoxes>
      </ContainerBoxes>
    </>
  );
}
const SaleLine = styled.div`
  width: 100%;
  height: 3em;
  background-color: ${mainPink};
  color: #fff;
  font-size: 3em;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-bottom: 1em;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-transform: uppercase;
  color: #fff;
  font-weight: 900;
  margin-bottom: 1em;
`;

const ContainerBoxes = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Box1 = styled.div`
  width: 65%;
  height: 50em;
  background-color: #d9d9d9;
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
    width: 100%;
    margin: 0;
  }
`;
const MiniBoxes = styled.div`
  width: 25%;
  @media (max-width: 50em) {
    display: none;
  }
`;
const Box2 = styled.div`
  width: 100%;
  height: 23em;
  background-color: #d9d9d9;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrDNF14yJ46llQ_Owv1-J6zmoIHEt3OLGEw&usqp=CAU");
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
`;
const Box3 = styled.div`
  width: 100%;
  height: 23em;
  background-color: #d9d9d9;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIQhg99XbODt3o8-eTghlixAfWY7kgfBkpw&usqp=CAU");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  margin: 4em 1em;
  border-radius: 0.31em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
const Text = styled.p`
  font-size: 2.5em;
  text-transform: uppercase;
  color: ${mainPink};
  font-weight: 900;
  margin-bottom: 1em;
  background-color: ${mainGrey};
  border-radius: 5em;
  padding: 0.5em;
`;
