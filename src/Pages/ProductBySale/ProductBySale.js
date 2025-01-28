import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../Components/Products/Products";
import { Container } from "./ProductBySale.style";

export default function ProductBySale() {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const params = useParams();

	useEffect(() => {
		const promise = axios.get(
			process.env.REACT_APP_BACK_END_API_URI +
				"/products/" +
				params.type +
				"/sale",
		);
		promise.then(({ data }) => {
			setProducts(data);
		});
	}, [params]);

	return (
		<Container>
			<Products
				products={products}
				type={params.type + " em promoção"}
				page={page}
				setPage={setPage}
			/>
		</Container>
	);
}
