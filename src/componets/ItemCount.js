import Header from "./header"
import { useEffect, useState } from "react";


function ItemCount() {
    const [contador, setContador] = useState(0)

    // let contador = Resultado[0]
    // const setContador = Resultado[1]
    const stockDisponible = 10

    // console.log(Resultado)
    function addCarrito() {
        if (contador === stockDisponible) {
            return (
                contador
            )
        }
        setContador(contador + 1)
        setTimeout(() => {
            console.log("añadiste un producto al carrito")
        }, 10)
        console.log(contador)
    }
    function outCarrito() {
        if (contador === 0) {
            return (
                <p>No hay productos en el carrito</p>
            )
        }
        setContador(contador - 1)
        console.log(contador)
    }
    return (
        <>
            <div className="carrito-count">
                <h5><p>Productos en el carrito: </p></h5>
                <p>{contador}</p>
                <button onClick={outCarrito}>-</button>
                <button>Agregar al carrito</button>
                <button onClick={addCarrito}>+</button>
            </div>

        </>
    )
}
export default ItemCount