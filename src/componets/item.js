import { Link } from "react-router-dom";

const Item = ({ product }) => {
    console.log(product)
    return (
        <>
            <div className="card-item">
                <img height="380px" src={product.img} />
                <h3>{product.product}</h3>
                <p> <b>Precio:</b>  ${product.Precio}</p>
                <Link to= "./detalle" className="product-detail">Ver detalles</Link>
            </div>


        </>
    )
}
export { Item }