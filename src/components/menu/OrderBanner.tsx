import { MessageCircle } from "lucide-react";

export const OrderBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b4d2c] border-t-4 border-white">

      <div className="relative max-w-7xl mx-auto h-[170px] md:h-[230px] flex items-center">

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b4d2c] via-[#0d5f35] " />

        {/* PIZZA IMAGE */}
        <img
          src="/pizza-order-now.png"
          alt="Pizza artesanal"
          className="absolute right-0 top-0 h-full w-[65%] md:w-auto object-cover md:object-contain"
        />

        {/* BASIL */}
        <img
          src="contacto/albacha.png"
          alt="Albahaca"
          className="absolute left-[34%] top-1/2 -translate-y-1/2 w-[90px] md:w-[140px] z-[2]"
        />

        {/* CONTENT */}
        <div className="relative z-10 px-6 md:px-12 max-w-[320px] md:max-w-xl">

          <h2 className="text-white text-[2rem] md:text-5xl font-bold leading-tight">
            ¿Listo para disfrutar?
          </h2>

          <p className="text-white/90 text-sm md:text-xl mt-3 leading-relaxed">
            Haz tu pedido ahora y disfruta
            <br />
            de la mejor pizza en casa.
          </p>

          <button className="mt-5 bg-white hover:bg-[#f3f3f3] text-green-900 px-7 py-3 rounded-full text-base md:text-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl">
            Pedir ahora
            <MessageCircle size={22} />
          </button>

        </div>
      </div>
    </section>
  );
};