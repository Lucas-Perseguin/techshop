import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./ProductBySale.style";
import Products from "../../Components/Products/Products";

export default function ProductBySale() {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    const promise = axios.get(
      process.env.REACT_APP_BACK_END_API_URI +
        "/products/" +
        params.type +
        "/sale"
    );
    promise.then(({ data }) => {
      setProducts(data);
    });
  }, [params]);

  return (
    <Container>
      <Products products={products} type={params.type + " em promoção"} />
    </Container>
  );
}
