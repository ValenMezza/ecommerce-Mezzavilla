import { Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from "./ItemDetailContainer"
import { ItemListContainer } from "./ItemListContainer"

const Main =()=>{
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer></ItemListContainer>}/>
                <Route path="/detalle" element={<ItemDetailContainer/>}/>
                <Route path="./ItemCount.js"/>
                <Route path="./ItemCount.js"/>
                
            </Routes>
        </main>
    )
}       
export {Main}