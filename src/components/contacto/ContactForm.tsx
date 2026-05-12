import {
    Mail,
    User,
    Phone,
    Pencil,
    Send,
    ChevronDown,
  } from "lucide-react";
  
  const ContactForm = () => {
    return (
      <section className="relative overflow-hidden rounded-[35px] bg-gradient-to-br from-[#0d4b2a] via-[#135c34] to-[#0d4b2a] p-10">
  
        {/* DECORATION */}
        <img
          src="/decorations/basil-big.png"
          alt="basil"
          className="absolute -bottom-6 -left-6 w-32"
        />
  
        {/* HEADER */}
        <div className="flex items-start gap-5">
  
          {/* ICON */}
          <div className="min-w-[65px] h-[65px] rounded-full bg-[#d62828] flex items-center justify-center">
  
            <Mail
              size={30}
              className="text-white"
            />
  
          </div>
  
          {/* TEXT */}
          <div>
  
            <h2 className="text-4xl font-bold text-white">
              Envíanos un mensaje
            </h2>
  
            <p className="text-white/80 text-lg mt-3 max-w-sm">
              Completa el formulario y te responderemos
              lo antes posible.
            </p>
  
          </div>
  
        </div>
  
        {/* FORM */}
        <form className="mt-10 space-y-5">
  
          {/* INPUT */}
          <div className="relative">
  
            <User
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#7b7b7b]"
            />
  
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full h-16 rounded-xl bg-white px-14 outline-none text-[#173d2d]"
            />
  
          </div>
  
          {/* INPUT */}
          <div className="relative">
  
            <Mail
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#7b7b7b]"
            />
  
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full h-16 rounded-xl bg-white px-14 outline-none text-[#173d2d]"
            />
  
          </div>
  
          {/* INPUT */}
          <div className="relative">
  
            <Phone
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#7b7b7b]"
            />
  
            <input
              type="text"
              placeholder="Teléfono (opcional)"
              className="w-full h-16 rounded-xl bg-white px-14 outline-none text-[#173d2d]"
            />
  
          </div>
  
          {/* SELECT */}
          <div className="relative">
  
            <select
              className="w-full h-16 rounded-xl bg-white px-5 appearance-none outline-none text-[#173d2d]"
            >
              <option>Asunto</option>
              <option>Reservación</option>
              <option>Pedido</option>
              <option>Soporte</option>
            </select>
  
            <ChevronDown
              size={22}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#173d2d]"
            />
  
          </div>
  
          {/* TEXTAREA */}
          <div className="relative">
  
            <Pencil
              size={20}
              className="absolute left-5 top-6 text-[#7b7b7b]"
            />
  
            <textarea
              placeholder="Escribe tu mensaje aquí..."
              rows={5}
              className="w-full rounded-xl bg-white pl-14 pr-5 pt-5 outline-none text-[#173d2d]"
            />
  
          </div>
  
          {/* BUTTON */}
          <button
            className="mt-4 bg-[#d62828] hover:bg-[#bb1f1f] duration-300 text-white font-semibold px-10 h-16 rounded-full flex items-center gap-3"
          >
            Enviar mensaje
  
            <Send size={20} />
          </button>
  
        </form>
  
      </section>
    );
  };
  
  export default ContactForm;