import { useState, useEffect } from "react";
import { customFetch } from "../assets/customFetch";
import { products } from "../assets/productos"
import { ItemList } from "./ItemList";

const ItemListContainer = ({ Greeting }) => {
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        customFetch(products)
            .then(data => {
                setLoading(true)
                setListProducts(data)
            })

    }, [])
    return (
        <>

            {loading && <ItemList listProducts={listProducts}></ItemList>}            
            {!loading && <div class="text-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>}
        </>

    )
}
export { ItemListContainer }