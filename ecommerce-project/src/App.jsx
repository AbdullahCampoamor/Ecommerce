import { Route, Routes } from "react-router"
import { Home } from "./pages/home/Home"
import { Products } from "./pages/products/Products"
import { Checkout } from "./pages/Checkout"
import './App.css'


function App() {


  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>

  )
}

export default App
