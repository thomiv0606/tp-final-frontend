import Card from "./Card";

// Recibe el listado por props y renderiza una Card por producto
function CardList({ productos }) {
  if (productos.length === 0) {
    return <p className="mensaje">No se encontraron productos.</p>;
  }

  return (
    <section className="card-list">
      {productos.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </section>
  );
}

export default CardList;