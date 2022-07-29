import Greeting from './greeting.js'
import NavBar from './NavBar.js'
const Header = function Header() {
    return (
        <header>
            <img className='icono-suelosur' src="/icono-suelosur.png" alt="" />
            <div className='img-carrito_nav'>
                <img className='img-carrito' src="https://cdn-icons-png.flaticon.com/512/107/107831.png" height="500px" alt="" />
            </div>
            <NavBar></NavBar>
            <Greeting></Greeting>
            
        </header>
    )
}
export default Header