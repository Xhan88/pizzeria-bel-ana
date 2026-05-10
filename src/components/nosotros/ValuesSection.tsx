import {
    Heart,
    Leaf,
    Users,
    Pizza,
  } from "lucide-react";
  
  const values = [
    {
      icon: <Leaf size={38} />,
      title: "Ingredientes frescos",
      description: "Seleccionamos lo mejor de cada temporada.",
    },
    {
      icon: <Heart size={38} />,
      title: "Pasión en cada detalle",
      description: "Desde la masa hasta el último ingrediente.",
    },
    {
      icon: <Pizza size={38} />,
      title: "Tradición artesanal",
      description: "Horneamos al momento para ti.",
    },
    {
      icon: <Users size={38} />,
      title: "Cercanía",
      description: "Tratamos a nuestros clientes como parte de la familia.",
    },
  ];
  
  const ValuesSection = () => {
    return (
      <section className="relative overflow-hidden py-10 px-6"   style={{
        backgroundImage: "url('nosotros/bg-nosotros.png')",
      }}>
        
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(40,167,69,0.35),_transparent_70%)]" />
  
        {/* DECORATIONS */}
        <img
          src="/tomato-outline.png"
          alt=""
          className="absolute left-0 top-10 w-52 opacity-10"
        />
  
        <img
          src="/oil-outline.png"
          alt=""
          className="absolute right-0 top-0 w-48 opacity-10"
        />
  
        <div className="relative max-w-7xl mx-auto">
          
          {/* TITLE */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="w-16 h-[2px] bg-[#d94b3d]" />
  
            <h2 className="text-5xl font-bold text-white">
              Nuestros valores
            </h2>
  
            <div className="w-16 h-[2px] bg-[#d94b3d]" />
          </div>
  
          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center px-8 py-6 border-white/20 lg:border-r last:border-r-0"
              >
                
                {/* ICON */}
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-[#0f4d37] shadow-xl">
                  {value.icon}
                </div>
  
                {/* TITLE */}
                <h3 className="mt-8 text-3xl font-bold text-white leading-snug">
                  {value.title}
                </h3>
  
                {/* DESCRIPTION */}
                <p className="mt-4 text-white/80 text-lg leading-8">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ValuesSection;