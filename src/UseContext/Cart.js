
//Importaciones


import { createContext, useState } from "react";




//Creacion de contexto 
const CartContext=createContext()


//Provider

const CartContextProvider=({children})=>{


//States
const [Cart,SetCart]=useState([])
const [total,SetTotal]=useState(0)
const [Resumen,Setresumen]=useState([])
const Catalogo= [

    {
        id:1,
        Nombre:"procesador  intel 15",
        Precio:8000,
        Descripcion:"11gen",
        imagen:"https://clicservicios.com/wp-content/uploads/2020/07/core-i5.jpg"
    },
    {
        id:2,
        Nombre:"RAM 8GB",
        Precio:8500,
        Descripcion:"5kg",
        imagen:"https://tse3.mm.bing.net/th?id=OIP.hXbzTLinMJm7DCdad8I8GgHaEo&pid=Api&P=0&w=266&h=167"
    },
    {
        id:3,
        Nombre:"Teclado mecanico",
        Precio:2000,
        Descripcion:"2M",
        imagen:"https://tse3.mm.bing.net/th?id=OIP.uzGX-zB2BMALYaczMyyVwwHaEA&pid=Api&P=0&w=300&h=163"
    },
    {
        id:4,
        Nombre:"Mouse RGBA",
        Precio:1200,
        Descripcion:"",
        imagen:"https://tse3.mm.bing.net/th?id=OIP.4z2NYeltkoVvktP5fGWw8wHaE6&pid=Api&P=0&w=254&h=170"
    },
    {
        id:5,
        Nombre:"Disco solido",
        Precio:5000,
        Descripcion:"1TB",
        imagen:"https://tse3.mm.bing.net/th?id=OIP.Ires_QcvIySmSYhoopDiJwHaGh&pid=Api&P=0&w=179&h=158"
    }
]

const ADDcart=(x)=>{
    
    SetCart([...Cart,x])
    SetTotal(total+x.Precio)
    Setresumen({cuenta:Cart.length,total:total})
    
    

}

const removecart=(x)=>{
    
    SetCart(Cart.filter((item=>item.id!==x.id)))
    SetTotal(total-x.Precio)
    Setresumen({cuenta:Cart.length,total:total})
    
    

}




const imports ={Catalogo, Cart, Resumen, ADDcart, removecart}
return(<CartContext.Provider value={imports}>{children}</CartContext.Provider>)

}

export {CartContextProvider}
export default CartContext