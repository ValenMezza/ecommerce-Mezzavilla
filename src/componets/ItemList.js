import { products } from "../assets/productos"
import { Item } from "./item"

const ItemList = ({listProducts})=> {
    console.log(listProducts)
    return(
        <>
            {listProducts.map(products =><Item key={products.id} products={products}/>)}
        </>
    )
}
export {ItemList} 