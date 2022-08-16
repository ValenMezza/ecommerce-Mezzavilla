import Header from "./componets/header";
import Greeting from "./componets/greeting";
import Footer from "./componets/footer";
import {customFetch} from "./assets/customFetch";
import { useEffect, useState } from "react";
import ItemCount from "./componets/ItemCount";
import { ItemListContainer } from "./componets/ItemListContainer";
import { ItemList } from "./componets/ItemList";
import { Item} from "./componets/Item";
function App() {
    return (
        <>
            <Header />
            <ItemCount></ItemCount>
            <main>
                <ItemListContainer/>
            </main>
            
            <footer>
                <Footer></Footer>
                
            </footer>
        </>
    )
}
export default App;