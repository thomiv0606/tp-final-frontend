import { Link } from "react-router-dom";
import { traducirCategoria } from "../utils/categorias";

// Tarjeta de un producto: muestra imagen, categoría, título,
// descripción, precio y rating. Al hacer clic lleva al detalle.
function Card({ producto }) {
  const { id, title, description, category, price, rating, thumbnail } =
    producto;

  return (
    <Link className="card" to={`/producto/${id}`}>
      <img className="card-img" src={thumbnail} alt={title} />

      <div className="card-body">
        <span className="card-categoria">{traducirCategoria(category)}</span>
        <h2 className="card-titulo">{title}</h2>
        <p className="card-descripcion">{description}</p>

        <div className="card-footer">
          <span className="card-precio">${price}</span>
          <span className="card-rating">★ {rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
