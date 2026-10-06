import { Route, Routes } from "react-router"
import { Home } from "./pages/home/Home"
import { Products } from "./pages/products/Products"
import { Checkout } from "./pages/Checkout"
import './App.css'
import axios from "axios"
import { useEffect, useState } from "react"


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
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products cart={cart} loadCart={loadCart} />} />
      <Route path="/checkout" element={<Checkout cart={cart} loadCart={loadCart} />} />
    </Routes>

  )
}

export default App
