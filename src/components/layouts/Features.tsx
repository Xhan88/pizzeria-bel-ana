import {
    Leaf,
    Heart,
    Bike,
  } from "lucide-react";
  
  import { Flame } from "lucide-react";  
  const features = [
    {
      icon: <Leaf size={42} strokeWidth={1.8} />,
      title: "Ingredientes\nfrescos",
      description:
        "Seleccionamos lo mejor cada día.",
    },
  
    {
        icon: <Flame size={42} strokeWidth={1.8} />,      title: "Horneadas\nal momento",
      description:
        "Preparamos tu pizza al instante.",
    },
  
    {
      icon: <Heart size={42} strokeWidth={1.8} />,
      title: "Hechas con\npasión",
      description:
        "Cada pizza tiene nuestro toque especial.",
    },
  
    {
      icon: <Bike size={42} strokeWidth={1.8} />,
      title: "Entrega rápida",
      description:
        "Llevamos tu pizza caliente y a tiempo.",
    },
  ];
  
  export const Features = () => {
    return (
      <section className="relative z-20 -mt-10">
        
        <div className="w-full">
  
          <div className="bg-gradient-to-r from-[#0d4b2d] via-[#14532d] to-[#0d4b2d] rounded-none lg:rounded-sm shadow-2xl overflow-hidden">
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-5 px-8 py-10 relative
                  ${
                    index !== features.length - 1
                      ? "lg:border-r border-white/20"
                      : ""
                  }`}
                >
                  
                  {/* ICON */}
                  <div className="text-white mt-1 shrink-0">
  
                    {feature.customIcon ? (
                      <img
                        src={ovenIcon}
                        alt="Horno"
                        className="w-11 h-11 object-contain invert"
                      />
                    ) : (
                      feature.icon
                    )}
  
                  </div>
  
                  {/* TEXT */}
                  <div>
  
                    <h3 className="text-white text-3xl font-semibold leading-tight whitespace-pre-line">
                      {feature.title}
                    </h3>
  
                    <p className="text-white/80 text-base mt-3 leading-relaxed max-w-[220px]">
                      {feature.description}
                    </p>
  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };