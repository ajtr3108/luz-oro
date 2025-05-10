
import "../components/Navbar.css"
import logo from "../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
      <nav className="navbar">
    
            <img className="logo" src={logo} alt="logo" />

        <ul className="navbar-links">
            <li className="navbar-item"><a href="#">Collares</a></li>
            <li className="navbar-item"><a href="#">Anillos</a></li>
            <li className="navbar-item" ><a href="#">Pulseras</a></li>
            <li className="navbar-item"><a href="#">Aretes</a></li>
            
        </ul>

<CartWidget/>

    </nav>
  )
}

export default NavBar