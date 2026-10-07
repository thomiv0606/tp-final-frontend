// Skeleton de la página de detalle: ocupa el lugar del producto
// mientras llegan los datos de la API
function SkeletonDetail() {
  return (
    <div className="detalle" aria-hidden="true">
      <div className="skeleton detalle-img skeleton-detalle-img" />

      <div className="detalle-info skeleton-detalle-info">
        <div className="skeleton skeleton-linea skeleton-corta" />
        <div className="skeleton skeleton-titulo" />
        <div className="skeleton skeleton-linea skeleton-corta" />
        <div className="skeleton skeleton-linea" />
        <div className="skeleton skeleton-linea" />
        <div className="skeleton skeleton-linea skeleton-corta" />
        <div className="skeleton skeleton-linea skeleton-corta" />
        <div className="skeleton skeleton-linea skeleton-corta" />
      </div>
    </div>
  );
}

export default SkeletonDetail;
