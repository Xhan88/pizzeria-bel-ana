import { MessageCircle } from "lucide-react";

export const OrderBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b4d2c] border-t-4 border-white">

      <div className="relative max-w-7xl mx-auto h-auto py-8 md:py-0 md:h-[230px] flex items-center">

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b4d2c] via-[#0d5f35]" />

        <img
          src="/pizza-order-now.png"
          alt="Pizza artesanal"
          className="
            absolute right-0 top-1/2 -translate-y-1/2 
            /* Mobile: Controlamos el alto y ancho para mantener el círculo como la foto */
            h-[110%] w-[50%] object-cover object-left
            /* Desktop: Se mantiene tu config original */
            md:top-0 md:translate-y-0 md:h-full md:w-auto md:object-contain
          "
        />

        <img
          src="contacto/albacha.png"
          alt="Albahaca"
          className="
            absolute z-[2] -translate-y-1/2
            /* Mobile: Posición exacta según el mockup */
            left-[42%] top-[60%] w-[70px]
            /* Desktop: Se mantiene tu config original */
            md:left-[34%] md:top-1/2 md:w-[140px]
          "
        />

   
        <div className="relative z-10 px-6 md:px-12 max-w-[240px] sm:max-w-[300px] md:max-w-xl">

          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            ¿Listo para disfrutar?
          </h2>

          <p className="text-white/90 text-xs sm:text-sm md:text-xl mt-2 md:mt-3 leading-snug md:leading-relaxed">
            Haz tu pedido ahora y disfruta
            <br />
            de la mejor pizza en casa.
          </p>

          <button className="mt-4 md:mt-5 bg-white hover:bg-[#f3f3f3] text-green-900 px-5 py-2.5 md:px-7 md:py-3 rounded-full text-sm md:text-lg font-semibold flex items-center gap-2 md:gap-3 transition-all duration-300 hover:scale-105 shadow-xl">
            Pedir ahora
            <MessageCircle size={18} className="md:w-[22px] md:h-[22px]" />
          </button>

        </div>
      </div>
    </section>
  );
};