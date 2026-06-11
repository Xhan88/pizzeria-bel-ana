
import { Pizza } from "lucide-react";
import Menu from "./Menu";

export const MenuSection = () => {
  return (
    <section className="py-20 bg-[#f7f4ef]">
      

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <div className="flex items-center justify-center gap-6 mb-6">

          <div className="w-16 h-[2px] bg-[#d62828]" />

          <Pizza
            size={60}
            className="text-[#d62828]"
            strokeWidth={1.8}
          />

          <div className="w-16 h-[2px] bg-[#d62828]" />

          </div>

          <h2 className="text-5xl md:text-7xl font-black text-[#173d2d] leading-none">
            Nuestro menú
          </h2>

          <p className="text-[#4f6257] text-2xl mt-6 max-w-2xl mx-auto">
            Pizzas artesanales hechas con ingredientes
            frescos y mucho amor.
          </p>

        </div>

        <Menu />


      </div>
    </section>
  );
};