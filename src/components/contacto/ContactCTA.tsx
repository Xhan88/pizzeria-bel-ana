import { Pizza } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto relative overflow-hidden bg-[#f3ede4] border border-dashed border-black/10 rounded-[2rem] px-5 py-15 md:px-16 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 ">
        
        <div className="relative z-10 w-28 md:w-64">
          <img 
            src="/contacto/pizza-footer.png" 
            alt="Pizza ilustración" 
            className="w-full h-auto drop-shadow-xl"
          />
        </div>

        <div className="relative z-10 flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a3d2d] mb-2">
            ¿Prefieres pedir ahora?
          </h2>
          <p className="text-[#4a5d54] text-lg md:text-xl">
            Haz tu pedido de forma rápida y fácil.
          </p>
        </div>


        <div className="relative z-10">
          <button className="bg-[#b3261e] hover:bg-[#8e1f18] transition-colors text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-medium shadow-lg">
            Pedir ahora
            <Pizza size={18} />     
          </button>
        </div>

 

      </div>
    </section>
  );
};

export default ContactCTA;