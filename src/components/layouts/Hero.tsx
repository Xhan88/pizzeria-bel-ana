import { Pizza, MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ef] min-h-screen">

      <div className="max-w-7xl mx-auto relative">

        {/* MOBILE / DESKTOP LAYOUT */}
        <div className="grid lg:grid-cols-2 items-center min-h-screen">

          {/* TEXT CONTENT */}
          <div className="relative z-10 px-5  lg:px-8 lg:pt-0 flex flex-col order-1 ">

            {/* TITLE */}
            <h1 className="text-[3.2rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight sm:mt-[-70px] mt-[-00px] ">

              <span className="text-green-900 block">
                Sabor que
              </span>

              <span className="text-red-700 block mt-1">
                te conquista
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 text-[1.35rem] md:text-2xl text-gray-700 leading-relaxed max-w-xl">
              Pizzas artesanales hechas con ingredientes
              frescos y mucho amor.
            </p>

          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center lg:justify-end order-2 mt-[-40px] lg:mt-[0px]">

            <img
              src="/pizza-home.png"
              alt="Pizza artesanal"
              className="
                w-[125%]
                sm:w-[110%]
                lg:w-[950px]
                max-w-none
                object-contain
                drop-shadow-2xl
                translate-x-10
                mt-[-90px] lg:mt-0
                sm:translate-x-16
                lg:translate-x-40
              "
            />

          </div>

          {/* BUTTONS */}
          <div
            className="
              flex flex-col sm:flex-row gap-4
              px-5 lg:px-8
              w-full
              -mt-36 lg:mt-10
              order-3
              lg:absolute
              lg:left-0
              lg:bottom-[120px]
              lg:w-auto
            "
          >

            <button className="bg-red-700 hover:bg-red-800 text-white px-7 py-4  rounded-full text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:scale-105 w-full sm:w-auto">
              Ver menú
              <Pizza size={20} />
            </button>

            <button className="border-2 border-green-800 text-green-900 hover:bg-green-900 hover:text-white px-7 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 w-full sm:w-auto mb-[20px] lg:mb-[0px]">
              Pedir ahora
              <MessageCircle size={20} />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};