import ItemCount from "./ItemCount"
import { useEffect, useState } from "react";
import { products } from "../assets/productos";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer =() =>{
    const [data, setData] = useState([]);
    const {categoriaId }= useParams();



    useEffect(()=>{
        const getData = new Promise(resolve=> {
            setTimeout(() => {
                resolve(products)
            }, 1000);
        });           
        if (categoriaId) {
            getData.then(res => setData(res.filter(product => product.categoria === categoriaId)))
        } else{
            getData.then(res => setData(res))
        }
    }, [categoriaId])


    // const onAdd =(quantity)=>{
    //     console.log(`Compraste ${quantity} unidades`)
    // }
    return(
        <>
            <ItemList data={data}/>

            {/* <ItemCount initial={0} stock={10} onAdd={onAdd}/> */}
        </>
    )
}
export default ItemListContainer;
