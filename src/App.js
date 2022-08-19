import Header from "./componets/header";
import Footer from "./componets/footer";
import { BrowserRouter } from "react-router-dom"
import {Main} from "./componets/main"
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