import Greeting from './greeting.js'
import NavBar from './NavBar.js'
const Header = function Header() {
    return (
        <>
            <header>
                    <img className='icono-argentina' src="/DiseñoLogo.png" alt="" />
                    <div className='header_title'><h1 >ARGENTO</h1></div>
                <NavBar></NavBar>
            </header>
        </>

    )
}
export default Header