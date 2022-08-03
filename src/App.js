import Header from "./componets/header";
import Greeting from "./componets/greeting";
import Footer from "./componets/footer";

import { useState } from "react";
import ItemCount from "./componets/ItemCount";
function App() {

    return (
        <>
            <Header />
            <ItemCount></ItemCount>
            <Greeting></Greeting>
            <Footer></Footer>
        </>
    )
}


export default App;

