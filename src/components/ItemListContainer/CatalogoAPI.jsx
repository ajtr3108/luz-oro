import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const keywords = {
  pulseras: ["bracelet", "pulsera"],
  aretes: ["earring", "arete"],
  anillos: ["ring", "anillo"],
  todo: ["bracelet", "earring", "ring", "pulsera", "arete", "anillo"]
};

function filtrarPorTipo(productos, tipo) {
  const palabras = keywords[tipo];
  return productos.filter((item) =>
    palabras.some((palabra) =>
      item.title.toLowerCase().includes(palabra) ||
      item.description.toLowerCase().includes(palabra)
    )
  );
}

const CatalogoAPI = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();
  const tipo = categoria || "todo"; 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  const productosFiltrados = filtrarPorTipo(productos, tipo);

  return (
    <div>
      <div className="buttom-menu-container">
        <Link className="buttom-menu" to="/pulseras">Pulseras</Link>
        <Link className="buttom-menu" to="/aretes">Aretes</Link>
        <Link className="buttom-menu" to="/anillos">Anillos</Link>
        <Link className="buttom-menu" to="/">Todo</Link>
        </div>
        <div className="card">
    <ul>
    {productosFiltrados.map((item) => (
        <li key={item.id}>
        <Link to={`/productos/${item.id}`}>{item.title}</Link>
        <img src={item.image} alt={item.title} width={100} />
        <p>{item.description}</p>
        <p>${item.price}</p>
        </li>
    ))}
    </ul>
    </div>
    </div>
  );
};

export default CatalogoAPI;