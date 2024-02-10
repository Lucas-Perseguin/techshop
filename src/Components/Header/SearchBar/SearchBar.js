import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: all 0.3s ease;
  height: ${(props) => (props.state ? '0' : 'auto')};
  padding: ${(props) => (props.state ? '0' : '15px')};
`;

const MaxWidthContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: ${(props) => (props.state ? '0' : 'auto')};
  padding: ${(props) => (props.state ? '0' : '15px 25px')};
  border: ${(props) => (props.state ? '0' : '2px solid #d5d6da')};
  border-radius: 50px;
  outline: none;

  font-size: 16px;
  &:focus {
    border: 2px solid #ff4791;
    transition: border 0.3s ease;
  }
`;

const SearchButton = styled.button`
  right: 20px;
  top: 50%;
  background-color: #d5d6da;
  color: #fff;
  padding: 10px;
  display: ${(props) => (props.state ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transform: translateY(-50%);
  position: absolute;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background-color: #ff4791;
    transition: background 0.2s ease;
  }
`;

export default function SearchBar({ state }) {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  function dataSearch() {
    navigate('/busca', { state: { name: value } });
    setValue('');
  }
  return (
    <Container state={state}>
      <MaxWidthContainer>
        <Input
          placeholder="Digite o nome do produto"
          state={state}
          value={value}
          onChange={(e) => setValue(() => e.target.value)}
        />
        <SearchButton onClick={dataSearch} state={state}>
          <ion-icon
            style={{ fontSize: '22px', color: '#fff', cursor: 'pointer' }}
            name="search"
          ></ion-icon>
        </SearchButton>
      </MaxWidthContainer>
    </Container>
  );
}
