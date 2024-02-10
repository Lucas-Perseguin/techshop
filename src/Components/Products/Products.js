import Product from "./Product/Product";
import { Container, Header, ProductList } from "./Products.style";

export default function Products({ products, type }) {
  return (
    <Container>
      <Header>{type.charAt(0).toUpperCase() + type.slice(1)}</Header>
      <ProductList>
        {products.map(({ name, price, image, _id }) => (
          <Product key={_id} id={_id} title={name} price={price} url={image} />
        ))}
      </ProductList>
    </Container>
  );
}
