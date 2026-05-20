import { Heart } from "lucide-react";

const StorySection = () => {
  return (
    <section className="relative bg-[#f8f4ee] py-16 md:py-24 px-6 overflow-hidden">
      
      {/* mx-auto centra todo el componente en móvil */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-[-40px] items-center">
        
        {/* CONTENEDOR DE LA IMAGEN */}
        {/* En móvil usamos flex y justify-center para que la foto se alinee perfectamente al centro */}
        <div className="relative flex justify-center lg:block w-full">
          
          <img
            src="./nosotros/histori.png"
            alt="Chef preparando pizza"
            className="
              /* Mobile: se adapta al ancho de la pantalla sin deformarse y se mantiene centrada */
              w-full max-w-md h-auto object-cover rounded-2xl drop-shadow-xl
              
              /* Desktop: TUS VALORES ORIGINALES EXACTOS */
              lg:w-[40rem] lg:h-[30rem] lg:max-w-none lg:rounded-none
            "
          />

          <div className="absolute -bottom-10 right-[-30px] rotate-[-5deg]">
            {/* Espacio para la polaroid decorativa */}
          </div>
        </div>

        {/* CONTENEDOR DE TEXTO */}
        <div className="text-left mt-4 lg:mt-0">
          
          <span className="uppercase tracking-[4px] text-sm text-[#c0392b] font-semibold">
            Nuestra historia
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#124734]">
            Todo comenzó
            <br />
            con un
            <span className="text-[#c0392b]"> sueño</span>
          </h2>

          <p className="mt-6 lg:mt-8 text-[#555] text-base sm:text-lg leading-8 sm:leading-9">
            BelAna Pizzería inició como un pequeño proyecto familiar con
            el deseo de ofrecer pizzas artesanales que unieran a las personas.
          </p>

          <p className="mt-4 lg:mt-6 text-[#555] text-base sm:text-lg leading-8 sm:leading-9">
            Con esfuerzo, dedicación y el apoyo de nuestros clientes,
            hemos crecido manteniendo lo más importante: la calidad,
            el sabor y el amor por lo que hacemos.
          </p>

          <button
            className="
              mt-8 lg:mt-10
              border
              border-[#124734]
              text-[#124734]
              px-6 py-3.5 lg:px-8 lg:py-4
              rounded-full
              flex
              items-center
              justify-center
              gap-3
              hover:bg-[#124734]
              hover:text-white
              transition-all
              duration-300
              w-full sm:w-auto
              text-sm sm:text-base
            "
          >
            Gracias por ser parte de nuestra historia
            <Heart size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StorySection;