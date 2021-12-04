
import Header from "./Componentes/Header";
import {CartContextProvider} from "./UseContext/Cart";
import Store from "./Componentes/store";
import Cart from "./Componentes/Cart";
import "./App.css"

function App() {
  return (
    
    <CartContextProvider><div className="encabezado"><Header/></div> <div className="dividida"><div className="segmento"><Store/></div><div className="segmento"><Cart/></div></div></CartContextProvider>

  );
}

export default App;
