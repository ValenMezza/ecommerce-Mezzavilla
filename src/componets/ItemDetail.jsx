import ItemCount from "./ItemCount"
import { useState, useContext } from "react"
import { useCartContext } from "../assets/CartContext";
import {cartProvider} from "../assets/CartContext"


import { Link } from "react-router-dom"
export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false)
    const {addProduct}= useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true)
        addProduct(data , quantity)
    }
    return (
        <>
            <div className='detail_container'>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={data.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{data.product}</h2>
                                <hr />
                                <h5>${data.Precio}</h5>
                                <hr />
                                <h5>Caracteristicas:</h5>
                                <hr />
                                <p className="card-text">{data.detalles}</p><hr />
                                <p className="card-text">{data.detalles2}</p>
                            </div>
                        </div>
                        {
                            goToCart
                                ?<Link to='/cart'>Terminar compra</Link>:(<ItemCount initial={0} stock={10} onAdd={onAdd} />
                        )}

                        
                    </div>

                </div>

            </div>
        </>

    )
}
export default ItemDetail