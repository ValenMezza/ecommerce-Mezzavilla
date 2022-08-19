import { ItemDetail } from "./ItemDetail";
import { products } from "../assets/productos";
import { useEffect, useState } from "react";
const product_detail=            {
    id: 1,
    product: 'Termo Stanley Blanco',
    categoria: "Termos",
    Precio: 32000,
    img: 'https://http2.mlstatic.com/D_NQ_NP_968935-MLA40150117241_122019-O.webp',
    stock: 50,
    capacidad: "1,5 L",
    detalles: "Porque algunas cosas son para toda la vida, este termo Stanley fue pensado para acompañarte a través de los años, ya que durabilidad y estilo son las palabras que definen a la marca. Gracias a su resistencia, obtendrás un gran rendimiento térmico y garantizarás que el líquido permanezca con la temperatura ideal por más tiempo. Además, al ser a prueba de fugas, dejarás de preocuparte por posibles derrames mientras realizás largos viajes o de camino al trabajo.",
    detalles2: "El sistema de vacío interno permite la conservación de la temperatura de tu bebida, eliminando los cambios que se puedan producir con el paso de las horas."
};

const ItemDetailContainer=(()=>{
    const [data, setData] = useState({});
    useEffect(()=>{
        const getData = new Promise(resolve =>{
                resolve(product_detail)
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