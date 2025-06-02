import { useState } from "react";
import './ContadorCarrito.css';

function ContadorCarrito() {
  const [count, setCount] = useState(0);

  const handleAgregar = () => {
    setCount(count + 1);
  };

  const handleQuitar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="contador-carrito">
      <button className="buttom-contador" onClick={handleAgregar}>+</button>
        <p>{count}</p>
      <button className="buttom-contador" onClick={handleQuitar} disabled={count === 0}>-</button>

    </div>
  );
}

export default ContadorCarrito