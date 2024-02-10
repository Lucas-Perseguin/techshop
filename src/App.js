import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutDefault from "./Layouts/LayoutDefault";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";
import SignUp from "./Pages/SignUp/SignUp";
import MainPage from "./Pages/Main/MainPage";
import SearchPage from "./Pages/Search/SearchPage";
import ProductBySale from "./Pages/ProductBySale/ProductBySale";
import ProductByType from "./Pages/ProductByType/ProductByType";
import IsLoggedInProvider from "./Context/isLoggedInContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <IsLoggedInProvider>
      <BrowserRouter>
        <LayoutDefault>
          <ToastContainer position="top-left" />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/busca" element={<SearchPage />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/produto/:productId" element={<Product />} />
            <Route path="/produtos/:type" element={<ProductByType />} />
            <Route path="/produtos/:type/sale" element={<ProductBySale />} />
            <Route path="/carrinho" element={<Cart />} />
          </Routes>
        </LayoutDefault>
      </BrowserRouter>
    </IsLoggedInProvider>
  );
}
