import { useState } from "react";
import "../components/Navbar.css"
import logo from "../assets/logo.png";
import CartWidget from "./ItemListContainer/CartWidget/CartWidget.jsx";
import CarritoCard from "./ItemListContainer/CarritoCard";

function NavBar() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <div style={{ position: "relative" }}>
        <CartWidget onClick={() => setMostrarCarrito(!mostrarCarrito)} />
        {mostrarCarrito && <CarritoCard />}
      </div>
    </nav>
  )
}

export default NavBar