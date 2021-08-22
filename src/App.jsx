import { Home } from "./pages/Home";
import { Pedido } from "./pages/Pedido";
import { Cardapio } from "./pages/Caradapio";
import { LoginAdmin } from "./pages/LoginAdmin";
import { InserirProdutos } from "./pages/InserirProdutos";

import { BrowserRouter, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/pedido" exact component={Pedido} />
      <Route path="/admin" exact component={LoginAdmin} />
      <Route path="/produtos" exact component={InserirProdutos} />
      <Route path="/cardapio" component={Cardapio} />

    </BrowserRouter>
  );
}

export default App;
