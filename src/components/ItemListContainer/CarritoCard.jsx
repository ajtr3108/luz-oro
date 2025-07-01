import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "./CartWidget/Context";
import './CarritoCard.css';

function CarritoCard() {
  const { cantidades } = useContext(CarritoContext);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const ids = Object.keys(cantidades).filter(id => cantidades[id] > 0);
      const productosData = await Promise.all(
        ids.map(id =>
          fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => ({ ...data, cantidad: cantidades[id] }))
        )
      );
      setProductos(productosData);
    };
    if (Object.keys(cantidades).length > 0) {
      fetchProductos();
    } else {
      setProductos([]);
    }
  }, [cantidades]);

  if (productos.length === 0) {
    return <div className="carrito-card"><p>El carrito está vacío.</p></div>;
  }

  return (
    <div className="carrito-card">
      <h3>Carrito de compras</h3>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>

            <span>{producto.title}</span>
            <span> x {producto.cantidad}</span>
            <span> - ${producto.price * producto.cantidad}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarritoCard;