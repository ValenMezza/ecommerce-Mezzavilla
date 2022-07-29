import NavBar from './NavBar.js'
const Header = function Header() {
    return (
        <header>
            <div className='img-carrito_nav'>
                <img className='img-carrito' src="https://cdn-icons-png.flaticon.com/512/107/107831.png" height="500px" alt="" />
            </div>
            <NavBar></NavBar>
        </header>
    )
}
export default Header