import {
    InstagramIcon,
    FacebookIcon,
    MessageCircle,
    MapPin,
    Phone,
  } from "lucide-react";
  
  import { Link } from "react-router-dom";
  
  const links = [
    { name: "Inicio", path: "/" },
    { name: "Menú", path: "/menu" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Galería", path: "/galeria" },
    { name: "Contacto", path: "/contacto" },
  ];
  
  export const Footer = () => {
    return (
      <footer className="w-full bg-[#f7f4ef] pt-16">
  
        {/* TOP */}
        <div className="max-w-7xl mx-auto px-6">
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-start pb-14">
  
            {/* BRAND */}
            <div>
              <h3 className="text-3xl font-bold text-[#184d2f]">
                BelAna Pizzería
              </h3>
  
              <p className="text-gray-700 mt-5 leading-relaxed text-lg">
                Pizzas artesanales hechas
                con ingredientes frescos
                y mucho amor.
              </p>
  
              {/* SOCIALS */}
              <div className="flex items-center gap-4 mt-6">

<a
  href="#"
  className="w-10 h-10 rounded-full bg-[#14532d] flex items-center justify-center text-white hover:scale-110 transition"
>
  <InstagramIcon size={20} />
</a>

<a
  href="#"
  className="w-10 h-10 rounded-full bg-[#14532d] flex items-center justify-center text-white hover:scale-110 transition"
>
  <FacebookIcon size={20} />
</a>

<a
  href="#"
  className="w-10 h-10 rounded-full bg-[#14532d] flex items-center justify-center text-white hover:scale-110 transition"
>
  <MessageCircle size={20} />
</a>

</div>
            </div>
  
            {/* LINKS */}
            <div className="lg:border-l lg:border-r border-gray-300 lg:px-10">
              <h4 className="text-2xl font-semibold text-[#184d2f] mb-5">
                Enlaces
              </h4>
  
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-700 hover:text-[#b52a1f] transition text-lg"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* HORARIO */}
            <div>
              <h4 className="text-2xl font-semibold text-[#184d2f] mb-5">
                Horario
              </h4>
  
              <div className="space-y-3 text-gray-700 text-lg">
                <p>Lunes a Domingo</p>
                <p>12:00 pm - 10:00 pm</p>
              </div>
            </div>
  
            {/* CONTACT */}
            <div className="lg:border-l border-gray-300 lg:pl-10">
              <h4 className="text-2xl font-semibold text-[#184d2f] mb-5">
                Contáctanos
              </h4>
  
              <div className="space-y-4 text-gray-700 text-lg">
  
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-[#184d2f]" />
                  <span>300 123 4567</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-[#184d2f]" />
                  <span>300 123 4567</span>
                </div>
  
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="text-[#184d2f] mt-1"
                  />
                  <span>
                    Calle 123 #45-67
                    <br />
                    Ciudad, País
                  </span>
                </div>
  
              </div>
            </div>
  
            {/* LOGO */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/bel-ana-logo.png"
                alt="BelAna Logo"
                className="w-52 object-contain"
              />
            </div>
  
          </div>
        </div>
  
        {/* BOTTOM */}
        <div className="bg-gradient-to-r from-[#0d4b2d] via-[#14532d] to-[#0d4b2d] py-5 text-center">
          <p className="text-white text-base">
            © 2024 BelAna Pizzería. Todos los derechos reservados.
          </p>
        </div>
  
      </footer>
    );
  };