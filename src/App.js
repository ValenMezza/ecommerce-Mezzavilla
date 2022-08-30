import Header from "./componets/header";
import Footer from "./componets/footer";
import { BrowserRouter } from "react-router-dom"
import { Main } from "./componets/main"
import MyProvider from "./componets/Context/CartContext";
function App() {
    return (
        <>
            <BrowserRouter>
                    <Header />
                <MyProvider>
                    <Main />
                </MyProvider>

                    <Footer />
            </BrowserRouter>
        </>
    )
}
export default App;

//En main.js está el {MyProvider} que está declarado previamente en la carpeta assest/CartContext. En es carpeta está importado el useContext.