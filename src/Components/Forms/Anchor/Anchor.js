import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  a {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.05em;
    text-decoration: none;
    color: #a7a7a7;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export default function Anchor({ children, to = '/', rest }) {
  return (
    <Container {...rest}>
      <Link to={to}>{children}</Link>      
    </Container>
  );
}
