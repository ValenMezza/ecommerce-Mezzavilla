import { Link } from "react-router-dom";
const Item = ({ product }) => {
    console.log(`${product.product}: $${product.Precio}`)
    return (
        <>
            <Link to={`/detalle/${product.id}`}>
                <div className="card-item">
                    <img height="300px" src={product.img} />
                    <h3>{product.product}</h3>
                    <p>${product.Precio}</p>
                    <Link to={`/detalle/${product.id}`} className="product-detail">Ver detalles</Link>
                </div>
            </Link>

        </>
    )
}
export { Item };