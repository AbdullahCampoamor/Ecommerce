import { Route, Routes } from "react-router"
import { Home } from "./pages/home/Home"
import { Products } from "./pages/Products"

import './App.css'


function App() {


  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />} />

    </Routes>

  )
}

export default App
