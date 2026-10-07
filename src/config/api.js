// URL base de la API. Se puede configurar con la variable de entorno
// VITE_API_URL en un archivo .env; si no está definida, se usa la URL
// pública de DummyJSON, así el proyecto funciona sin configuración extra.
export const API_URL =
  import.meta.env.VITE_API_URL || "https://dummyjson.com/products";