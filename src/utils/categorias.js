// Traducción de las categorías que devuelve la API (vienen en inglés)
const NOMBRES_CATEGORIAS = {
  smartphones: "Celulares",
  laptops: "Notebooks",
  tablets: "Tablets",
  "mobile-accessories": "Accesorios",
};

// Devuelve el nombre en español; si no hay traducción, deja el original
export function traducirCategoria(categoria) {
  return NOMBRES_CATEGORIAS[categoria] ?? categoria;
}