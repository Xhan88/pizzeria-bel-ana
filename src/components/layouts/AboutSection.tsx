import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b4d2c]">

      <div className="md:hidden">

        <div className="relative px-6 pt-16 pb-14 bg-gradient-to-br from-[#0b4d2c] via-[#0d5b33] to-[#08361f]">

          <div className="flex items-center gap-2">

            <h2 className="text-[3rem] font-bold text-white leading-none">
              Sobre
            </h2>

            <img
              src="/firma-belana.png"
              alt="BelAna"
              className="h-20 object-contain mt-1"
            />
          </div>

          <div className="w-20 h-[2px] bg-white mt-4"></div>

          <p className="text-white/95 text-[1.9rem] leading-relaxed mt-8 max-w-[320px]">
            Somos una pizzería artesanal que nace
            del amor por la buena comida. Usamos
            ingredientes frescos y recetas auténticas
            para ofrecerte una experiencia única en
            cada bocado.
          </p>

<Link
  to="/nosotros"
          className="mt-10 bg-white text-green-900 px-8 py-4 rounded-full text-xl font-semibold flex items-center gap-3 shadow-2xl inline-flex"
>
          
                      Conócenos más
            <Leaf size={24} />

</Link>
        
        

        

          
       
   

        </div>

        <div className="relative overflow-hidden">

          <img
            src="/horno.png"
            alt="Horno artesanal"
            className="w-full h-[420px] object-cover"
          />


        </div>
      </div>



      <div className="relative h-[350px] hidden md:flex items-center overflow-hidden">

        <img
          src="/horno.png"
          alt="Horno artesanal"
          className="absolute right-0 top-0 h-full w-auto object-contain"
        />

        <div className="relative z-10 max-w-xl px-10 md:px-16 py-16">

          <div>
            <div className="flex items-center gap-2">

              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Sobre
              </h2>

              <img
                src="/firma-belana.png"
                alt="BelAna"
                className="h-20 md:h-24 w-auto object-contain mt-2"
              />

            </div>

            <div className="w-28 h-[2px] bg-white mt-6 max-w-6xl"></div>
          </div>

          <p className="text-white/90 text-xl leading-relaxed max-w-md">
            Somos una pizzería artesanal que nace del amor
            por la buena comida. Usamos ingredientes frescos
            y recetas auténticas para ofrecerte una experiencia
            única en cada bocado.
          </p>

          <Link
  to="/nosotros"
  className="mt-5 w-fit bg-white hover:bg-[#f3f3f3] text-green-900 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-5 transition-all duration-300 hover:scale-105 shadow-xl"
>
  Conócenos más
  <Leaf size={22} />
</Link>


        </div>
      </div>
    </section>
  );
};