import { Pizza, MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ef] min-h-screen">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 items-center min-h-screen">

          <div className="relative z-10 pt-32 lg:pt-0">

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              <span className="text-green-900 block">
                Sabor que
              </span>

              <span className="text-red-700 block mt-2">
                te conquista
              </span>
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-gray-700 leading-relaxed max-w-xl">
              Pizzas artesanales hechas con ingredientes
              frescos y mucho amor.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg">
                Ver menú
                <Pizza size={22} />
              </button>

              <button className="border-2 border-green-800 text-green-900 hover:bg-green-900 hover:text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 transition-all duration-300">
                Pedir ahora
                <MessageCircle size={22} />
              </button>

            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">

            <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block">
              
              <div className="w-14 h-1 bg-green-800 rounded-full rotate-45 mb-6"></div>

              <div className="w-10 h-1 bg-green-800 rounded-full -rotate-12 mb-6"></div>

              <div className="w-8 h-1 bg-red-700 rounded-full rotate-45"></div>

            </div>

            <img
              src="/pizza-home.png"
              alt="Pizza artesanal"
              className="w-[950px] max-w-none object-contain drop-shadow-2xl translate-x-42"
            />

          </div>

        </div>
      </div>
    </section>
  );
};