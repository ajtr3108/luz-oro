import "../components/Navbar.css"
import logo from "../assets/logo.png";
import CartWidget from "./ItemListContainer/CartWidget/CartWidget.jsx";

function NavBar() {
  return (
      <nav className="navbar">
            <img className="logo" src={logo} alt="logo" />
<CartWidget/>

    </nav>
  )
}

export default NavBar