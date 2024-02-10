import Product from "./Product/Product";
import { Container, Header, Page, ProductList } from "./Products.style";

export default function Products({ products, type, page, setPage }) {
  return (
    <Container>
      <Header>{type.charAt(0).toUpperCase() + type.slice(1)}</Header>
      <ProductList>
        {products.slice((page - 1) * 10, page * 10).map(({ name, price, image, _id }) => (
          <Product key={_id} id={_id} title={name} price={price} url={image} />
        ))}
      </ProductList>
      <Page>
        <h1>Página</h1>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          {"<"}
        </button>
        <div>{page}</div>
        <button 
          disabled={page === Math.ceil(products.length / 10)}
          onClick={() => setPage(page + 1)}>{">"}</button>
      </Page>
    </Container>
  );
}
