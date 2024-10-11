import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import Basket from "./pages/Basket";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="basket" element={<Basket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
