// Tarjeta de carga (skeleton): ocupa el lugar de una Card mientras
// llegan los datos de la API, para que la página no quede vacía
function SkeletonCard() {
  return (
    <div className="card skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton-img" />

      <div className="card-body">
        <div className="skeleton skeleton-linea skeleton-corta" />
        <div className="skeleton skeleton-titulo" />
        <div className="skeleton skeleton-linea" />
        <div className="skeleton skeleton-linea" />
        <div className="skeleton skeleton-linea skeleton-corta" />
      </div>
    </div>
  );
}

export default SkeletonCard;
