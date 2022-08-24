
import React, {useState, useContext}  from 'react'
const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({Children}) => {
    const [cart, setCart] = useState([]);
	const addProduct = (Item, quantity) => {
		if (isInCart(Item.id)) {
			setCart(
				cart.map((product) => {
					return product.id === Item.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				}),
			);
		} else {
			setCart([...cart, { ...Item, quantity }]);
		}
	};

    const clearCart = ()=> setCart([]);
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false ;
    const removeProduct = (id) =>setCart (cart.filter(product => product.id !== id));
    return (
        <>
            <CartContext.Provider  value={{
                clearCart,
                isInCart,
                removeProduct,
                addProduct
            }}>
                {Children}
            </CartContext.Provider>
        </>
)
}
export default CartProvider ;
