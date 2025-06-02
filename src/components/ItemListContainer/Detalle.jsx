import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CatalogoAPI from "./CatalogoAPI";
import ContadorCarrito from "./ContadorCarrito";
import './Detalle.css';

function Detalle() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

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

    return (
      <div>
        <div className="detalle-container">
            <h2 className="detalle-title">Detalles del producto</h2>
            <h2 className="detalle-title">{producto.title}</h2>
            <img className="detalle-img" src={producto.image} alt={producto.title} />
            <p className="detalle-desc">{producto.description}</p>
            <h3 className="detalle-price">${producto.price}</h3>
            <ContadorCarrito />
        </div>
        <div>
            <CatalogoAPI />
        </div>
      </div>
    );
}

export default Detalle