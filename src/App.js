import Header from "./componets/header";
import Greeting from "./componets/greeting";
import Footer from "./componets/footer";
import {customFetch} from "./assets/customFetch";
import { useEffect, useState } from "react";
import {ItemCount} from "./componets/ItemCount";
import { ItemListContainer } from "./componets/ItemListContainer";
import { ItemDetailContainer } from "./componets/ItemDetailContainer.jsx";
import { ItemList } from "./componets/ItemList";
function App() {
    return (
        <>
            <Header />
            <aside>
                <ItemCount></ItemCount>
            </aside>
            <main>
                <ItemListContainer/>
            </main>
            <ItemDetailContainer>
                {/* <ItemCount></ItemCount> */}
            </ItemDetailContainer>

            <footer>
                <Footer></Footer>
            </footer>
        </>
    )
}
export default App; 