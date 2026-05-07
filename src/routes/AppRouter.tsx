import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { Nosotros } from "../pages/Nosotros";
import { Galeria } from "../pages/Galeria";
import { Contacto } from "../pages/Contacto";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};