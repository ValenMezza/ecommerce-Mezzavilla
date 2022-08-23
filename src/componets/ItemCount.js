import Header from "./header"
import { useEffect, useState } from "react";


export function ItemCount({initial, stock ,onAdd}) {
    const [count, setCount] = useState(0)

    // let contador = Resultado[0]
    // const setContador = Resultado[1]
    // const stockDisponible = 10

    // console.log(Resultado)
    function addCarrito() {
        // if (contador === stockDisponible) {
        //     return (
        //         contador
        //     )
        // }
        setCount(count + 1)
        console.log(count)
    }
    function outCarrito() {
        // if (contador === 0) {
        //     return (
        //         <p>No hay productos en el carrito</p>
        //     )      
        // }
        setCount(count - 1)
        console.log(count)
    }
    return (
        <>
            <div className="carrito-count">
                <h5><p>Productos en el carrito: </p></h5>
                <p>{count}</p>
                <button disabled={count <=0} onClick={outCarrito}>-</button>
                <button disabled={count<=0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
                <button disabled={count >= stock} onClick={addCarrito}>+</button>
            </div>

        </>
    )
}
export default ItemCount;