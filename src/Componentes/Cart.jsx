import React from 'react'
import "../Componentes/store.css"
import { useContext } from 'react'
import CartContext from '../UseContext/Cart'

const Cart = () => {

  const {Cart, ADDcart, removecart}=useContext(CartContext)


    return (
        <section className="fondo">
        <div className="separacion"></div>
        
<h1 className="titulo">Carrito</h1>
        {
          Cart.map(run=>(
            
            <div className="Contenedor">
              <div className="parte">
            <h1>{run.Nombre}</h1>
            <img src={run.imagen} alt="" />
            </div>
            <div className="parte">
            <h3>${run.Precio}</h3>
            <h4>{run.Descripcion}</h4>
            <button onClick={()=>removecart(run)}>Qhitar de carrito</button>
            </div>
            </div>
            


          ))
        }
        


      </section>
    )
}

export default Cart