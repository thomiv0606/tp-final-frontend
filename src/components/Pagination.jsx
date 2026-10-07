// Controles para navegar entre páginas de resultados
function Pagination({ paginaActual, totalPaginas, onCambiarPagina }) {
  // Con una sola página no hace falta mostrar los controles
  if (totalPaginas <= 1) {
    return null;
  }

  return (
    <nav className="pagination">
      <button
        className="pagination-btn"
        disabled={paginaActual === 1}
        onClick={() => onCambiarPagina(paginaActual - 1)}
      >
        Anterior
      </button>

      <span className="pagination-info">
        Página {paginaActual} de {totalPaginas}
      </span>

      <button
        className="pagination-btn"
        disabled={paginaActual === totalPaginas}
        onClick={() => onCambiarPagina(paginaActual + 1)}
      >
        Siguiente
      </button>
    </nav>
  );
}

export default Pagination;