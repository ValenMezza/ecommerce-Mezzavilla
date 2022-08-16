import { products } from "../assets/productos";

const Item =({products})=>{
    console.log(products)
    return(
        <div>{products.products}</div>
    )
}
export {Item}