import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { traducirCategoria } from "../utils/categorias";
import { API_URL } from "../config/api";

// Página de detalle: muestra la información completa de un producto
function ProductDetail() {
  // Lee el id del producto desde la URL (/producto/:id)
  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Pide el producto a la API cada vez que cambia el id de la URL
  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const respuesta = await fetch(`${API_URL}/${id}`);

        // fetch no falla con errores HTTP (404, 500), hay que verificarlo
        if (!respuesta.ok) {
          throw new Error(`Error HTTP ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        setProducto(datos);
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar el producto. Puede que no exista.");
      } finally {
        setCargando(false);
      }
    };

    obtenerProducto();
  }, [id]);

  if (cargando) {
    return <p className="mensaje">Cargando producto...</p>;
  }

  if (error) {
    return (
      <section className="not-found">
        <p className="mensaje mensaje-error">{error}</p>
        <Link className="boton-volver" to="/">
          Volver al inicio
        </Link>
      </section>
    );
  }

  return (
    <article className="detalle">
      <img
        className="detalle-img"
        src={producto.images[0]}
        alt={producto.title}
      />

      <div className="detalle-info">
        <span className="card-categoria">
          {traducirCategoria(producto.category)}
        </span>
        <h2>{producto.title}</h2>
        <p className="detalle-marca">Marca: {producto.brand}</p>
        <p>{producto.description}</p>

        <ul className="detalle-lista">
          <li>Precio: ${producto.price}</li>
          <li>Descuento: {producto.discountPercentage}%</li>
          <li>Rating: ★ {producto.rating}</li>
          <li>Stock: {producto.stock} unidades</li>
          <li>Código: {producto.sku}</li>
        </ul>

        <Link className="boton-volver" to="/">
          Volver al listado
        </Link>
      </div>
    </article>
  );
}

export default ProductDetail;