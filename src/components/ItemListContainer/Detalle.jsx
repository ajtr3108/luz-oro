import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import CatalogoAPI from "./CatalogoAPI";
import './Detalle.css';
import { CarritoContext } from "./CartWidget/Context";

function Detalle() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cantidad, setCantidad] = useState(1);
    const { agregarCantidad } = useContext(CarritoContext);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProducto(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <h2>Cargando...</h2>;
    }

    if (!producto || producto.id === undefined) {
        return <h2>El producto seleccionado no existe</h2>;
    }

    const handleAddToCart = () => {
        for (let i = 0; i < cantidad; i++) {
            agregarCantidad(producto.id);
        }
    };

    return (
      <div>
        <div className="detalle-container">
            <h2 className="detalle-title">Detalles del producto</h2>
            <h2 className="detalle-title">{producto.title}</h2>
            <img className="detalle-img" src={producto.image} alt={producto.title} />
            <p className="detalle-desc">{producto.description}</p>
            <h3 className="detalle-price">${producto.price}</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button onClick={() => setCantidad(c => Math.max(1, c - 1))}>-</button>
                <span>{cantidad}</span>
                <button onClick={() => setCantidad(c => c + 1)}>+</button>
                <button onClick={handleAddToCart}>Añadir al carrito</button>
            </div>
        </div>
        <div>
            <CatalogoAPI />
        </div>
      </div>
    );
}

export default Detalle