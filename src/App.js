import Header from "./componets/header";
import Footer from "./componets/footer";
import { BrowserRouter } from "react-router-dom"
import {Main} from "./componets/main"
import CartProvider from "./assets/CartContext";
function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Main/>
                <Footer/> 
            </BrowserRouter>
        </>
    )
}
export default App; 

//En main.js está el {cartProvider} que está declarado previamente en la carpeta assest/CartContext. En es carpeta está importado el useContext.