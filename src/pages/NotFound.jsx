import { Link } from "react-router-dom";

// Página 404: se muestra cuando la URL no coincide con ninguna ruta
function NotFound() {
  return (
    <section className="not-found">
      <h2 className="not-found-codigo">404</h2>
      <p>La página que buscás no existe.</p>
      <Link className="boton-volver" to="/">
        Volver al inicio
      </Link>
    </section>
  );
}

export default NotFound;
