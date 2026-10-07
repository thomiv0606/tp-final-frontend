# Tienda de Tecnología

Trabajo Práctico Final del Curso Inicial de Desarrollo Front-End (UTN BA).

Aplicación web hecha con React que consume la API pública
[DummyJSON](https://dummyjson.com/) y muestra un catálogo de productos
de tecnología: celulares, notebooks, tablets y accesorios.

## Funcionalidades

- Listado de productos en tarjetas con imagen, categoría, título,
  descripción, precio y rating.
- Búsqueda en tiempo real: filtra los resultados mientras se escribe.
- Paginado de resultados.
- Página de detalle de cada producto.
- Página de error 404 para URLs inexistentes.
- Manejo de estados de carga y de error en las llamadas a la API.

Nota: los nombres y descripciones de los productos se muestran en inglés
porque así los devuelve la API.

## Tecnologías

- React
- Vite
- React Router
- CSS
- Fetch API

## Cómo ejecutar el proyecto localmente

Requisito: tener instalado [Node.js](https://nodejs.org/).

1. Clonar el repositorio:

       git clone https://github.com/thomiv0606/tp-final-frontend.git

2. Entrar a la carpeta del proyecto:

       cd tp-final-frontend

3. Instalar las dependencias:

       npm install

4. Iniciar el servidor de desarrollo:

       npm run dev

5. Abrir en el navegador la dirección que muestra la terminal
   (por defecto http://localhost:5173).

## Variables de entorno (opcional)

La URL base de la API se lee de la variable de entorno `VITE_API_URL`,
definida en `src/config/api.js`. Si la variable no existe, se usa por
defecto la URL pública de DummyJSON, por lo que el proyecto funciona
sin ninguna configuración extra.

Para cambiarla, copiar el archivo `.env.example` con el nombre `.env`
y editar el valor:

    VITE_API_URL=https://dummyjson.com/products

En este proyecto la URL es pública y no es un dato sensible. Se usa una
variable de entorno como buena práctica: en un proyecto real, las URLs
y claves de cada entorno no deben quedar escritas en el código.

## Decisiones técnicas

- El listado se obtiene con una única petición a la API (`limit=0` y
  `select` para traer solo los campos necesarios) y las categorías se
  filtran en el cliente.
- En modo desarrollo las peticiones se ven duplicadas en la pestaña
  Network porque React StrictMode ejecuta los efectos dos veces para
  detectar errores. En producción se realizan una sola vez.

## Estructura del proyecto

- `src/main.jsx`: punto de entrada, configura el enrutador.
- `src/App.jsx`: encabezado y definición de rutas.
- `src/config/api.js`: URL base de la API.
- `src/pages/Home.jsx`: listado con buscador y paginado.
- `src/pages/ProductDetail.jsx`: detalle de un producto.
- `src/pages/NotFound.jsx`: página 404.
- `src/components/`: componentes reutilizables (Card, CardList,
  SearchBar, Pagination).
- `src/utils/categorias.js`: traducción de categorías al español.