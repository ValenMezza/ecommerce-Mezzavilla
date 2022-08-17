const Item = ({ product }) => {
    console.log(product)
    return (
        <>
            <div className="card-item">
                <img height="200px" width="250xp" src={product.img} />
                <h3>{product.product}</h3>
                <p> <b>Precio:</b>  ${product.Precio}</p>
                <button className
                    ="product-detail">Ver detalles</button>
            </div>


        </>
    )
}
export { Item }