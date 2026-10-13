import { Route, Routes, useLocation } from "react-router"
import { Home } from "./pages/home/Home"
import { Products } from "./pages/products/Products"
import { Checkout } from "./pages/Checkout"
import { Orders } from "./pages/Orders"
import { Login } from "./pages/Login"
import './App.css'
import axios from "axios"
import { useEffect, useState } from "react"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('http://localhost:3000/api/cart-items?expand=product');
    setCart(response.data);
  };
  useEffect(() => {
    loadCart();
  }, []);


  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products cart={cart} loadCart={loadCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} loadCart={loadCart} />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>

  )
}

export default App
