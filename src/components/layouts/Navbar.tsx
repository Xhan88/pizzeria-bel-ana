import { NavLink, Link } from 'react-router-dom';
import { Pizza } from "lucide-react";


const links = [
  { name: 'Inicio', path: '/' },
  { name: 'Menú', path: '/menu' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Galería', path: '/galeria' },
  { name: 'Contacto', path: '/contacto' },
];

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 ">
          
        <div className="w-52 relative">
  <Link to="/" className="block">
    <img 
      src="/bel-ana-logo.png" 
      alt="Pizzería Bel Ana Logo" 
      className="absolute -top-[76px] left-0 h-[260px] w-[260px] object-contain"
    />
  </Link>
</div>

          <div className="hidden md:flex items-center gap-x-8 ">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-red-800' : 'text-green-800  hover:text-red-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center">
          <button className="bg-red-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-red-700 transition-all duration-300 shadow-md flex items-center gap-2 hover:scale-105">
            Haz tu pedido
            <Pizza size={18} />
          </button>
          </div>

        </div>
      </div>
    </nav>
  );
};