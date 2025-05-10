import carrito from "../assets/logodecarrito.png";
function CartWidget() {
  return (
    <div className="carrito">
        <img src={carrito} alt="carrito" />
        <carrito size="30px"/>
        <span className="badge">4</span>

    </div>
  )
}

export default CartWidget