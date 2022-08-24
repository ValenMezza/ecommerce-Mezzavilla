import  ItemDetail from './ItemDetail'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { products } from "../assets/productos";


const ItemDetailContainer = () => {
    const [data , setData] =useState({})
    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve (products)
            }, 500);
        });
        getData.then(res => setData(res.find(product => product.id === parseInt(detalleId))));
    },[])

    return (
        <>
            <ItemDetail data={data}/>
        </>
    )
}
export {ItemDetailContainer};
