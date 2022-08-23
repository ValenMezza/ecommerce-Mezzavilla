import { BrowserRouter,Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from "./ItemDetailContainer"
import { ItemListContainer } from "./ItemListContainer" 

const Main =(prduct)=>{
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer></ItemListContainer>}/>
                {/* <Route path="/categoria/:${product.categoria} element={<ItemListContainer/>}/> */}
                <Route path='/categoria/:categoriaId' element={<ItemListContainer></ItemListContainer>}/>
                <Route path='/categoria/:categoriaId' element={<ItemListContainer></ItemListContainer>}/>
                <Route path='/detalle/:detalleId'  element={<ItemDetailContainer/>}/>

                
            </Routes>
        </main>
    )
}       
export {Main}