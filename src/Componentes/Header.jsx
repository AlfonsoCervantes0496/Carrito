import React from 'react'
import { useContext } from 'react'
import "../Componentes/Header.css"
import CartContext from '../UseContext/Cart'


const Header = () => {

    const {Resumen}=useContext(CartContext)
    const array=[Resumen]
    
    

   

    return (
        <header>
            
            <h1>Cart Store</h1>
             
{array.map(run=>(
    <div>
             <h3>Cantidad {run.cuenta}</h3>
             <h3>Total {run.total}</h3>
             </div>
))
}
             

             



        </header>
    )
}

export default Header

