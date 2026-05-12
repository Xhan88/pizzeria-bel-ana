import { MenuCard } from "./MenuCard";
import { ExtrasCard } from "./ExtrasCard";
import { ComboCard } from "./ComboCard";
import { Pizza } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 mt-20">

          <div className="space-y-8">

            <MenuCard
              image="./pizzas/margherita.png"
              title="Margherita"
              description="Tomate, mozzarella, albahaca fresca y aceite de oliva."
              price="$12.000"
              tags={["Vegetariana", "Masa artesanal"]}
            />

            <MenuCard
              image="/pizzas/pepperoni.png"
              title="Pepperoni"
              description="Pepperoni, mozzarella y salsa de tomate especial."
              price="$13.500"
              tags={["Clásica"]}
            />

            <MenuCard
              image="/pizzas/bbq-chicken.png"
              title="Vegetariana"
              description="Pimentón, champiñones, cebolla, aceitunas y mozzarella."
              price="$12.500"
              tags={["Vegetariana", "Masa artesanal"]}
            />
            <MenuCard
              image="/pizzas/vegetariana.png"
              title="Hawaiana"
              description="Pimentón, champiñones, cebolla, aceitunas y mozzarella."
              price="$12.500"
              tags={["Vegetariana", "Masa artesanal"]}
            />

          </div>

          <div>
  <ExtrasCard />
  <ComboCard />
</div>

        </div>

      </div>
    </section>
  );
};