import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import SkeletonCard from "../components/SkeletonCard";
import { API_URL } from "../config/api";

// Categorías que muestra la tienda, campos que se piden y tamaño de página
const CATEGORIAS = ["smartphones", "laptops", "tablets", "mobile-accessories"];
const CAMPOS = "title,description,category,price,rating,thumbnail";
const PRODUCTOS_POR_PAGINA = 8;

// Página principal: listado de productos con buscador y paginado
function Home() {
  // Estado de la petición: productos, indicador de carga y mensaje de error
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Estado de la interfaz: texto buscado y página actual
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);

  // Pide los productos a la API una sola vez, al montar el componente
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        // Una única petición: limit=0 trae todos los productos y select
        // limita la respuesta a los campos que usa la tarjeta
        const respuesta = await fetch(`${API_URL}?limit=0&select=${CAMPOS}`);

        // fetch no falla con errores HTTP (404, 500), hay que verificarlo
        if (!respuesta.ok) {
          throw new Error(`Error HTTP ${respuesta.status}`);
        }

        const datos = await respuesta.json();

        // Se queda con las categorías de la tienda y las ordena
        // según el orden definido en CATEGORIAS
        const productosTienda = datos.products
          .filter((producto) => CATEGORIAS.includes(producto.category))
          .sort(
            (a, b) =>
              CATEGORIAS.indexOf(a.category) - CATEGORIAS.indexOf(b.category),
          );

        setProductos(productosTienda);
      } catch (err) {
        console.error(err);
        setError("No se pudieron cargar los productos. Intentá más tarde.");
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  // Al escribir en el buscador se vuelve a la primera página
  const manejarBusqueda = (texto) => {
    setBusqueda(texto);
    setPaginaActual(1);
  };

  // Búsqueda en tiempo real: filtra por título sin distinguir mayúsculas
  const productosFiltrados = productos.filter((producto) =>
    producto.title.toLowerCase().includes(busqueda.trim().toLowerCase()),
  );

  // Paginado: calcula el total de páginas y recorta los productos a mostrar
  const totalPaginas = Math.ceil(
    productosFiltrados.length / PRODUCTOS_POR_PAGINA,
  );
  const inicio = (paginaActual - 1) * PRODUCTOS_POR_PAGINA;
  const productosPagina = productosFiltrados.slice(
    inicio,
    inicio + PRODUCTOS_POR_PAGINA,
  );

  return (
    <>
      <div className="buscador">
        <SearchBar busqueda={busqueda} onBuscar={manejarBusqueda} />
      </div>

      {/* Mientras carga se muestran skeletons, una por tarjeta de la página */}
      {cargando && (
        <section className="card-list" aria-label="Cargando productos">
          {Array.from({ length: PRODUCTOS_POR_PAGINA }, (_, indice) => (
            <SkeletonCard key={indice} />
          ))}
        </section>
      )}

      {error && <p className="mensaje mensaje-error">{error}</p>}

      {!cargando && !error && (
        <>
          <CardList productos={productosPagina} />
          <Pagination
            paginaActual={paginaActual}
            totalPaginas={totalPaginas}
            onCambiarPagina={setPaginaActual}
          />
        </>
      )}
    </>
  );
}

export default Home;
