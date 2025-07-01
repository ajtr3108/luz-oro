import { useContext } from 'react';
import { CarritoContext } from "./CartWidget/Context";
import './ContadorCarrito.css';

function ContadorCarrito({ id }) {
  const { cantidades, agregarCantidad, quitarCantidad } = useContext(CarritoContext);
  const cantidad = cantidades[id] || 0;

  return (
    <div className="contador-carrito">
      <button className="buttom-contador" onClick={() => agregarCantidad(id)}>+</button>
      <p>{cantidad}</p>
      <button className="buttom-contador" onClick={() => quitarCantidad(id)} disabled={cantidad === 0}>-</button>
    </div>
  );
}

export default ContadorCarrito