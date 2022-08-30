import { Children, createContext, useState } from "react";
export const CartContext = createContext ()
const {Provider} = CartContext;


const MyProvider = ({Children})=> {
    const [cart, setCart] = useState ([])

    const isInCart = (id)=> {
        return(
            cart.some(x => x.id === id)
        )
    }

    const addItem =() =>{
        return(
            <h1>hola</h1>
        )
    }

    const empityCart = ()=>{        
        return(
            setCart([])
        )}

    const deleteItem = (id)=>{
        return (
            setCart(cart.filter(product =>  product.id !== id))
        )
    }
    
    const getItemQty = ()=>{
        return(
            cart.reduce((acc, product)=> acc += product.cantidad, 0)
        )
    }
    const getItemPrice = ()=>{
        return(
            cart.reduce((acc, product)=> acc += product.cantidad * product.Precio, 0)
        )
    }



    return(
        <Provider value={{cart, isInCart, empityCart, deleteItem,getItemPrice, getItemQty, addItem }}>
            {Children}
        </Provider>
    )

}
export default MyProvider