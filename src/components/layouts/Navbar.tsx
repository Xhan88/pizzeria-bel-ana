import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Pizza, Menu, X } from "lucide-react";

const links = [
  { name: 'Inicio', path: '/' },
  { name: 'Menú', path: '/menu' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Galería', path: '/galeria' },
  { name: 'Contacto', path: '/contacto' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50  backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Container - Ajustado según referencia */}
  {/* Contenedor del Logo */}
<div className="w-48 md:w-64 relative flex items-center">
  <Link to="/" className="block">
    <img 
      src="/bel-ana-logo.png" 
      alt="Pizzería Bel Ana Logo" 
      className="
        /* Mobile: tamaño controlado */
        h-24 w-24 object-contain 
        
        /* Desktop: Aquí sucede la magia */
        md:absolute 
        md:-top-12 
        md:h-64 
        md:w-64 
        md:max-w-none
        transition-all duration-300
      "
    />
  </Link>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-8">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-red-800' : 'text-green-800 hover:text-red-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button className="bg-red-800 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold hover:bg-red-700 transition-all duration-300 shadow-md flex items-center gap-2 hover:scale-105">
              <span className="hidden xs:inline">Haz tu pedido</span>
              <span className="xs:hidden">Haz tu Pedir</span>
              <Pizza size={16} />
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-green-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white border-t border-gray-100 shadow-xl">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-4 text-base font-medium rounded-md ${
                  isActive ? 'text-red-800 bg-red-50' : 'text-green-800 hover:text-red-800 hover:bg-gray-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};