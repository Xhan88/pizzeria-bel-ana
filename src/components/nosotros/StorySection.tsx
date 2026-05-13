import { Heart } from "lucide-react";

const StorySection = () => {
  return (
    <section className="relative bg-[#f8f4ee] py-24 px-6 overflow-hidden">
      
     


      <div className="max-w-7xl  grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
        
        <div className="relative">
          
          <img
            src="./nosotros/histori.png"
            alt="Chef preparando pizza"
            className="w-[80rem] h-[30rem] "
          />

          <div className="absolute -bottom-10 right-[-30px] rotate-[-5deg]">
              
            
          </div>
        </div>

        <div>
          
          <span className="uppercase tracking-[4px] text-sm text-[#c0392b] font-semibold">
            Nuestra historia
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-[#124734]">
            Todo comenzó
            <br />
            con un
            <span className="text-[#c0392b]"> sueño</span>
          </h2>

          <p className="mt-8 text-[#555] text-lg leading-9">
            BelAna Pizzería inició como un pequeño proyecto familiar con
            el deseo de ofrecer pizzas artesanales que unieran a las personas.
          </p>

          <p className="mt-6 text-[#555] text-lg leading-9">
            Con esfuerzo, dedicación y el apoyo de nuestros clientes,
            hemos crecido manteniendo lo más importante: la calidad,
            el sabor y el amor por lo que hacemos.
          </p>

          <button
            className="
              mt-10
              border
              border-[#124734]
              text-[#124734]
              px-8
              py-4
              rounded-full
              flex
              items-center
              gap-3
              hover:bg-[#124734]
              hover:text-white
              transition-all
              duration-300
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