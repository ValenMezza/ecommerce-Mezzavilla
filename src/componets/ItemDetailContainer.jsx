import { ItemDetail } from "./ItemDetail";
import { products } from "../assets/productos";
import { useEffect, useState } from "react";
const product_detail=        {
    id: 1,
    product: 'Alquiler de Maquina Cargadora',
    Precio: '1300 x Hora',
    img: 'https://caymansseo.com/wp-content/uploads/2018/01/partes-y-funcionamiento-retroexcavadora.jpg',
    stock: 100,
    capacidad: "11495 kg",
    detalles: "Ofrecemos servicio con Maquina Cargadora"
};

const ItemDetailContainer=(()=>{
    const [data, setData] = useState({});
    useEffect(()=>{
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(product_detail)
            }, 5000);
        });
        getData.then(res=> setData(res))
    }, [] );
    return(    
        <>
            <ItemDetail data={data}/>
        </>
    )
})
export {ItemDetailContainer}