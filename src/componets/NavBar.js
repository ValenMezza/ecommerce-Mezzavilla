import { NavLink } from "react-router-dom";

const NavBar = function Nav() {
    return (
        <nav className="nav-list">
            
                <NavLink to='/categoria/Termos'>Termos</NavLink>
                <hr />
                <NavLink to='/categoria/Mates'>Mates</NavLink>
                <hr />
                <NavLink to='/categoria/Combos'>Combos</NavLink>
                <span className='img-carrito_nav' >
                    <img className='img-carrito' src="https://cdn-icons-png.flaticon.com/512/107/107831.png" height="500px" alt="" />
                </span>
        </nav>
        // <div>
        //     <Greeting></Greeting>
        // </div>

    )
}
export default NavBar;