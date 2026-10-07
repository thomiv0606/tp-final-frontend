import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import "./App.css";

// Componente raíz: define el encabezado común y las rutas de la aplicación
function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>
          <Link className="header-link" to="/">
            Tienda de Tecnología
          </Link>
        </h1>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          {/* Cualquier otra URL muestra la página 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;