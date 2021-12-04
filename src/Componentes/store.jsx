import React from 'react'
import "../Componentes/store.css"
import { useContext } from 'react'
import CartContext from '../UseContext/Cart'

const Store = () => {

  const {Catalogo, ADDcart}=useContext(CartContext)


    return (
      <section className="fondo">
        <div className="separacion"></div>
        
<h1 className="titulo">Tienda</h1>
        {
          Catalogo.map(run=>(
            
            <div className="Contenedor">
              <div className="parte">
            <h1>{run.Nombre}</h1>
            <img src={run.imagen} alt="" />
            </div>
            <div className="parte">
            <h3>${run.Precio}</h3>
            <h4>{run.Descripcion}</h4>
            <button onClick={()=>ADDcart(run)}>Agregar al carrito</button>
            </div>
            </div>
            


          ))
        }
        


      </section>
    )
}

export default Store




    