// Campo de búsqueda controlado: el texto vive en el estado del componente padre
function SearchBar({ busqueda, onBuscar }) {
  return (
    <input
      className="search-bar"
      type="search"
      placeholder="Buscar producto..."
      aria-label="Buscar producto"
      value={busqueda}
      onChange={(evento) => onBuscar(evento.target.value)}
    />
  );
}

export default SearchBar;
