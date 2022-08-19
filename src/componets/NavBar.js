import { NavLink } from "react-router-dom";
import Greeting from "./greeting.js";
const NavBar = function Nav() {
    return (
        <nav className="nav-list">
            <ul>
                <NavLink to="/categorias/Termos">Termos</NavLink>
                <hr />
                <NavLink to="/categorias/Mates">Mates</NavLink>
                <hr />
                <NavLink to="/categorias/Combos"><span className='img-carrito_nav' >
                    <img className='img-carrito' src="https://cdn-icons-png.flaticon.com/512/107/107831.png" height="500px" alt="" />Carrito
                </span></NavLink>
                
            </ul>
        </nav>
        // <div>
        //     <Greeting></Greeting>
        // </div>

    )
}
export default NavBar;