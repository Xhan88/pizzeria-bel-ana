
const ContactCTA = () => {
  return (
    <section className="px-6 py-12">
      <div className="max-w-6xl mx-auto relative overflow-hidden bg-[#f3ede4] border border-dashed border-black/10 rounded-[2rem] px-8 py-10 md:px-16 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* PIZZA ILUSTRACIÓN (Izquierda) */}
        <div className="relative z-10 w-48 md:w-64">
          <img 
            src="/public/pizza-draw.png" 
            alt="Pizza ilustración" 
            className="w-full h-auto drop-shadow-xl"
          />
        </div>

        {/* TEXTO CENTRAL */}
        <div className="relative z-10 flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a3d2d] mb-2">
            ¿Prefieres pedir ahora?
          </h2>
          <p className="text-[#4a5d54] text-lg md:text-xl">
            Haz tu pedido de forma rápida y fácil.
          </p>
        </div>

        {/* FLECHA DECORATIVA (Solo visible en desktop) */}
        <div className="hidden lg:block absolute left-[55%] top-1/2 -translate-y-1/2">
           <svg width="80" height="40" viewBox="0 0 80 40" fill="none" className="text-[#4a5d54]/40">
              <path d="M5 30C20 35 45 35 70 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
              <path d="M62 12L72 8L74 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        </div>

        {/* BOTÓN (Derecha) */}
        <div className="relative z-10">
          <button className="bg-[#b3261e] hover:bg-[#8e1f18] transition-colors text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-medium shadow-lg">
            Pedir ahora
            <img 
              src="/public/pizza-icon-white.png" 
              alt="Icon" 
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>

        {/* DECORACIÓN HOJAS (Fondo derecha) */}
        <img
          src="/public/basil-leaves.png"
          alt="Hojas de albahaca"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-32 md:w-48 opacity-10 pointer-events-none grayscale"
        />

      </div>
    </section>
  );
};

export default ContactCTA;