import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailsContainer} from "./components/ItemDetailsContainer";
import { Cart } from "./components/Cart";
import { NavBar } from "./components/NavBar";
import { useState } from "react";
import { Provider } from "./contexts/ItemsContext";

function App() {

const [carrito, setCarrito] = useState([]);



  return (

    <Provider value={{carrito, setCarrito}}>

     <BrowserRouter>
     <NavBar />
     <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/categoria/:id" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailsContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<div>404 Not Found</div>} />
     </Routes>
     
     </BrowserRouter>
     </Provider>
  );
}

export default App
