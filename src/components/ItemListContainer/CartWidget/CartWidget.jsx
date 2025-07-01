import { useContext } from "react";
import { CarritoContext } from "./Context";
import carrito from "../../../assets/logodecarrito.png";

function CartWidget({ onClick }) {
  const { totalCantidad } = useContext(CarritoContext);

  return (
    <div className="carrito" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={carrito} alt="carrito" />
      <span className="badge">{totalCantidad}</span>
    </div>
  )
}

export default CartWidget