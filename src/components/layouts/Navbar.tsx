import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="/bel-ana-logo.png"
            alt="BelAna Pizzería"
            className="h-14 w-auto"
          />
        </div>

        {/* NAV LINKS DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-green-700 transition">
            Inicio
          </a>
          <a href="#" className="hover:text-green-700 transition">
            Menú
          </a>
          <a href="#" className="hover:text-green-700 transition">
            Nosotros
          </a>
          <a href="#" className="hover:text-green-700 transition">
            Galería
          </a>
          <a href="#" className="hover:text-green-700 transition">
            Contacto
          </a>
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:flex">
          <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold transition">
            Haz tu pedido 🍕
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <nav className="flex flex-col gap-4 text-gray-700 font-medium">
            <a href="#">Inicio</a>
            <a href="#">Menú</a>
            <a href="#">Nosotros</a>
            <a href="#">Galería</a>
            <a href="#">Contacto</a>

            <button className="bg-red-600 text-white py-2 rounded-full mt-2">
              Haz tu pedido 🍕
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;