import { MoveRight } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden pt-30">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <div className="flex items-center gap-4 mb-8">

              <div className="w-14 h-[2px] bg-[#d62828]" />

              <p className="uppercase tracking-[4px] text-[#d62828] text-sm font-semibold">
                Contacto
              </p>

              <div className="w-14 h-[2px] bg-[#d62828]" />

            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-none text-[#173d2d]">
              Estamos aquí
            </h1>

            <h1 className="text-6xl md:text-7xl font-black leading-none text-[#d62828] mt-2">
              para ti
            </h1>

            <p className="text-[#4f6257] text-xl leading-relaxed mt-8 max-w-xl">
              Nos encantaría saber de ti. Escríbenos,
              visítanos o haz tu pedido.
              ¡Te esperamos!
            </p>

            <p className="mt-10 text-4xl text-[#173d2d] font-signature">
              Buenas pizzas, buenos momentos.
            </p>

            <div className="w-64 h-[2px] bg-[#d62828] mt-4" />

            <div className="flex items-center gap-10 mt-10 opacity-80">

              <img
                src="/contacto/tomate.png"
                alt="tomato"
                className="w-24"
              />

              <img
                src="/contacto/albacha.png"
                alt="basil"
                className="w-24"
              />

              <img
                src="/contacto/champ.png"
                alt="mushroom"
                className="w-24"
              />

            </div>

          </div>

          <div className="relative">

            <div className="absolute -top-6 -right-4 rotate-12">

              <MoveRight
                size={80}
                className="text-[#173d2d]"
              />

            </div>

            <img
              src="/contacto/local-belo-ana.png"
              alt="BelAna Pizzeria"
              className="w-full rounded-[40px] object-cover shadow-2xl"
            />



          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactHero;