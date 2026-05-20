const AboutHero = () => {
  return (
    // Cambié min-h-screen por h-auto y añadí pb-20 en móvil para dar espacio al horno, md mantiene tu flujo
    <section className="w-full h-auto md:min-h-screen bg-[#f8f4ee] pt-32 pb-24 md:pb-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* TEXTOS */}
        <div>
          <span className="text-[#c0392b] uppercase tracking-[4px] text-sm font-semibold">
            Sobre BelAna
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-[#124734]">
            Una historia hecha
            <span className="text-[#c0392b] font-signature">
              {" "}de amor por la pizza
            </span>
          </h1>

          <p className="mt-8 text-[#4d4d4d] text-lg leading-8 max-w-xl">
            BelAna Pizzería nace del sueño de compartir momentos únicos
            alrededor de una buena pizza.
          </p>

          <p className="mt-6 text-[#4d4d4d] text-lg leading-8 max-w-xl">
            Usamos ingredientes frescos y recetas auténticas para ofrecer
            una experiencia que combina tradición, pasión y sabor en cada bocado.
          </p>

          <h3 className="mt-10 text-4xl text-[#124734] font-signature">
            Buenas pizzas, buenos momentos.
          </h3>
        </div>

        {/* CONTENEDOR DE LA IMAGEN (CORREGIDO) */}
        {/* En móvil se queda relativo/estático para ocupar espacio real; en desktop vuelve a desbordar */}
        <div className="relative flex justify-center lg:block mt-10 lg:mt-0">
          <div className="relative lg:absolute lg:-bottom-48 lg:-left-10 w-full max-w-md lg:max-w-none">
            <img
              src="/nosotros/horno-nosotros.png"
              alt="Horno de leña con pizza" // Corregido el alt que decía Albahaca
              className="w-full h-auto drop-shadow-2xl object-contain rounded-2xl md:rounded-none"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;