import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Page } from './ProductByType.style';
import Products from './../../Components/Products/Products';
import Type from './Type/Type';

export default function ProductByType() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const params = useParams();
  useEffect(() => {
    setPage(1);
    const promise = axios.get(
      process.env.REACT_APP_BACK_END_API_URI + '/products/' + params.type
    );
    promise.then(({ data }) => {
      setProducts(data);
    });
  }, [params]);

  return (
    <Container>
      <Type title={params.type} />
      <Products products={products} type={params.type} page={page} setPage={setPage} />
    </Container>
  );
}
