import Header from "./componets/header";
import Greeting from "./componets/greeting";
import Footer from "./componets/footer";
import {customFetch} from "./assets/customFetch";
import { useEffect, useState } from "react";
import ItemCount from "./componets/ItemCount";
import { ItemListContainer } from "./componets/ItemListContainer";
import { ItemList } from "./componets/ItemList";
import { Item} from "./componets/item";
function App() {
    return (
        <>
            <Header />
            <ItemCount></ItemCount>
            <Greeting></Greeting>
            <ItemListContainer></ItemListContainer>
            <footer>
                <Footer></Footer>
            </footer>
            
        </>
    )
}


export default App;

