import { NavLink } from 'react-router-dom'
import Greeting from './greeting.js'
import NavBar from './NavBar.js'
const Header = function Header() {
    return (
        <>
            <header>
                    <NavLink to='/'><img className='icono-argentina' src="/DiseñoLogo.png" alt="" /></NavLink>
                    
                    <NavLink to='/'><div className='header_title'><h1 >ARGENTO</h1></div></NavLink>
                <NavBar></NavBar>
            </header>
        </>

    )
}
export default Header