import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

// URL base de la API pública y categorías que muestra la tienda
const API_URL = "https://dummyjson.com/products/category";
const CATEGORIAS = ["smartphones", "laptops", "tablets", "mobile-accessories"];
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
        // Una petición por categoría, todas en paralelo
        const respuestas = await Promise.all(
          CATEGORIAS.map((categoria) => fetch(`${API_URL}/${categoria}`))
        );

        // fetch no falla con errores HTTP (404, 500), hay que verificarlo
        if (respuestas.some((respuesta) => !respuesta.ok)) {
          throw new Error("Error HTTP al consultar la API");
        }

        const datos = await Promise.all(
          respuestas.map((respuesta) => respuesta.json())
        );

        // Une los productos de todas las categorías en un solo array
        setProductos(datos.flatMap((dato) => dato.products));
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
    producto.title.toLowerCase().includes(busqueda.trim().toLowerCase())
  );

  // Paginado: calcula el total de páginas y recorta los productos a mostrar
  const totalPaginas = Math.ceil(
    productosFiltrados.length / PRODUCTOS_POR_PAGINA
  );
  const inicio = (paginaActual - 1) * PRODUCTOS_POR_PAGINA;
  const productosPagina = productosFiltrados.slice(
    inicio,
    inicio + PRODUCTOS_POR_PAGINA
  );

  return (
    <>
      <div className="buscador">
        <SearchBar busqueda={busqueda} onBuscar={manejarBusqueda} />
      </div>

      {/* Renderizado condicional según el estado de la petición */}
      {cargando && <p className="mensaje">Cargando productos...</p>}
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