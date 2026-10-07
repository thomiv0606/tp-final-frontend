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

## Estructura del proyecto

- `src/main.jsx`: punto de entrada, configura el enrutador.
- `src/App.jsx`: encabezado y definición de rutas.
- `src/pages/Home.jsx`: listado con buscador y paginado.
- `src/pages/ProductDetail.jsx`: detalle de un producto.
- `src/pages/NotFound.jsx`: página 404.
- `src/components/`: componentes reutilizables (Card, CardList,
  SearchBar, Pagination).
- `src/utils/categorias.js`: traducción de categorías al español.