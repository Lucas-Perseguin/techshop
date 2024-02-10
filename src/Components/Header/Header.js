import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { isLoggedInContext } from '../../Context/isLoggedInContext';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MaxWidthContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #d5d6da;
`;

const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px;
  height: 80px;
  position: relative;
  @media (min-width: 1200px) {
    max-width: 80%;
    height: 100px;
  }
`;

const IconGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export default function Header() {
  const [toggleSearch, setToggleSearch] = useState(true);
  const contextLoggedIn = useContext(isLoggedInContext);
  const [isLoggedInIcon, setIsLoggedInIcon] = useState();
  const navigate = useNavigate();

  function logout() {
    setIsLoggedInIcon((prev) => false);
    contextLoggedIn.setIsToken((prev) => false);
    localStorage.token = '';
    navigate('/');
  }

  useEffect(() => {
    if (contextLoggedIn.isToken) setIsLoggedInIcon((prev) => true);
  }, [contextLoggedIn]);

  return (
    <Container>
      <MaxWidthContainer>
        <ContainerHeader>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo />
          </Link>
          <IconGroup>
            <ion-icon
              style={{
                fontSize: '22px',
                color: '#FF4791',
                cursor: 'pointer',
              }}
              name="search"
              onClick={() => {
                setToggleSearch((t) => !t);
              }}
            ></ion-icon>
            <Link to="/carrinho">
              <ion-icon
                style={{
                  fontSize: '22px',
                  color: '#2c2c2c',
                  cursor: 'pointer',
                }}
                name="cart"
              ></ion-icon>
            </Link>
            {!isLoggedInIcon ? (
              <ion-icon
                onClick={() => navigate('/login')}
                style={{
                  fontSize: '22px',
                  color: '#2c2c2c',
                  cursor: 'pointer',
                }}
                name="person"
              ></ion-icon>
            ) : (
              <ion-icon
                style={{
                  fontSize: '22px',
                  color: '#2c2c2c',
                  cursor: 'pointer',
                }}
                name="log-out-sharp"
                onClick={logout}
              ></ion-icon>
            )}
          </IconGroup>
        </ContainerHeader>
      </MaxWidthContainer>
      <SearchBar state={toggleSearch} />
    </Container>
  );
}
