import { Home } from "./pages/Home";
import { Pedido } from "./pages/Pedido";
import { Cardapio } from "./pages/Caradapio";

import { BrowserRouter, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/pedido" exact component={Pedido}/>
      <Route path="/cardapio" component={Cardapio}/>
    </BrowserRouter>
  );
}

export default App;
