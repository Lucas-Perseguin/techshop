import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import DataSearch from './DataSearch';
import LoadingPage from '../LoadingPage/LoadingPage';
export default function SearchPage() {
  const { state } = useLocation();
  const [products, setProducts] = useState();

  useEffect(() => {
    const promise = axios.get(
      `${process.env.REACT_APP_BACK_END_API_URI}/products?name=${state.name}`
    );
    promise.then((resposta) => {
      resposta.data ? setProducts(resposta.data) : setProducts(undefined);
    });
    promise.catch((erro) => {
      console.log(erro.reponse.data);
    });
  }, [products, state]);

  if (products === undefined) {
    return <LoadingPage text="Procurando os produtos perfeitos para você!" />;
  }

  return (
    <>
      <General>
        <ContainerSearch>
          <Title>Resultado da busca</Title>
          <SearchResult>
            {products === 'Produto não encontrado' ? (
              <Title>{products}</Title>
            ) : (
              <Items>
                {products.map((product, index) => (
                  <DataSearch key={index} product={product}></DataSearch>
                ))}
              </Items>
            )}
          </SearchResult>
        </ContainerSearch>
      </General>
    </>
  );
}
const General = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1em;
  font-family: 'Poppins';
`;
const ContainerSearch = styled.div`
  width: 90%;
  text-align: center;
  padding: 1em;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-transform: uppercase;
  color: white;
  font-weight: 900;
  margin-bottom: 1em;
`;
const SearchResult = styled.div`
  width: 100%;
  font-size: 1.5em;
  text-transform: uppercase;
  color: #000;
  font-weight: 400;
  margin-bottom: 1em;
`;
const Items = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
