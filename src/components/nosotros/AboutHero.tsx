const AboutHero = () => {
    return (
      <section className="w-full min-h-screen bg-[#f8f4ee] pt-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          
          <div>
            <span className="text-[#c0392b] uppercase tracking-[4px] text-sm font-semibold">
              Sobre BelAna
            </span>
  
            <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight text-[#124734]">
              Una historia hecha
              <span className="text-[#c0392b] font-signature">
                {" "}de amor por la pizza
              </span>
            </h1>
  
            <p className="mt-8 text-[#4d4d4d] text-lg leading-9 max-w-xl">
              BelAna Pizzería nace del sueño de compartir momentos únicos
              alrededor de una buena pizza.
            </p>
  
            <p className="mt-6 text-[#4d4d4d] text-lg leading-9 max-w-xl">
              Usamos ingredientes frescos y recetas auténticas para ofrecer
              una experiencia que combina tradición, pasión y sabor en cada bocado..
            </p>
  
            <h3 className="mt-10 text-4xl text-[#124734] font-signature">
              Buenas pizzas, buenos momentos.
            </h3>
          </div>
  
          <div className="relative">

  
            <div className="absolute -bottom-59 -left-10">
              <img
                src="/nosotros/horno-nosotros.png"
                alt="Albahaca"
                className="mt-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutHero;