import { useState, useEffect } from "react";
import { customFetch } from "../assets/customFetch";
import { products } from "../assets/productos"
import { Greeting } from "../componets/greeting";
import { ItemList } from "./ItemList";

const ItemListContainer = ({ Greeting }) => {

    const [listProducts, setListProducts] = useState([])
    useEffect(() => {
        customFetch(products)
            .then(data => setListProducts(data))
    }, [])
    console.log(listProducts)
    // console.log(productos)

    return (
        <>
            <h1>{Greeting}</h1>
            <ItemList listProducts={listProducts}/>
        </>

    )
}
export { ItemListContainer }