import { useState, useEffect } from "react";
import { customFetch } from "../assets/customFetch";
import { products } from "../assets/productos"
import { ItemList } from "./ItemList";
import { item, ItemDetailContainer } from "./ItemDetailContainer";

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
            {!loading && <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            {/* <ItemDetailContainer></ItemDetailContainer> */}
        </>

    )
    // fetch('https://http://localhost:3000/')
// .then(resultado =>{
//     // console.log(resultado )
//     // console.log('okaaay');
//     const productos_con_formato = resultado.json()
//     productos_con_formato.then((formato)=>{
//         console.log(formato)
//     })
//     productos_con_formato.catch((formato)=>{})
//     // console.log(productos_con_formato)
// })
// .catch((error)=>{
//     console.log('Error')
// })

}
export { ItemListContainer } 