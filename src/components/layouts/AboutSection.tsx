import { Leaf } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b4d2c]">

      {/* CONTAINER */}
      <div className="relative h-[350px] flex items-center overflow-hidden">

        {/* IMAGE */}
        <img
          src="/horno.png"
          alt="Horno artesanal"
          className="absolute right-0 top-0 h-full w-auto object-contain"
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-xl px-10 md:px-16 py-16">

          {/* TITLE */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Sobre{" "}
              <span className="font-light italic">
                BelAna
              </span>
            </h2>

            {/* LINE */}
            <div className="w-28 h-[2px] bg-white mt-6"></div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-white/90 text-xl leading-relaxed mt-10 max-w-md">
            Somos una pizzería artesanal que nace del amor
            por la buena comida. Usamos ingredientes frescos
            y recetas auténticas para ofrecerte una experiencia
            única en cada bocado.
          </p>

          {/* BUTTON */}
          <button className="mt-12 bg-white hover:bg-[#f3f3f3] text-green-900 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl">
            Conócenos más
            <Leaf size={22} />
          </button>

        </div>
      </div>
    </section>
  );
};