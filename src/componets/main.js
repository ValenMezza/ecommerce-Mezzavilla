import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartProvider from "../assets/CartContext"
import Cart from "./cart"
import { ItemDetailContainer } from "./ItemDetailContainer"
import { ItemListContainer } from "./ItemListContainer"

const Main = () => {
    return (
        <main>
                <Routes>
                    <Route path="/" element={<ItemListContainer></ItemListContainer>} />
                    {/* <Route path="/categoria/:${product.categoria} element={<ItemListContainer/>}/> */}
                    <Route path='/categoria/:categoriaId' element={<ItemListContainer></ItemListContainer>} />
                    <Route path='/categoria/:categoriaId' element={<ItemListContainer></ItemListContainer>} />
                    <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
        </main>
    )
}
export { Main }