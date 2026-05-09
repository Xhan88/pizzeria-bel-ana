import { MenuCard } from "./MenuCard";
import { ExtrasCard } from "./ExtrasCard";
import { ComboCard } from "./ComboCard";

export const MenuSection = () => {
  return (
    <section className="py-28 bg-[#f7f4ef]">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center">

          <h2 className="text-7xl font-bold text-[#184d2f]">
            Nuestro menú
          </h2>

          <p className="text-[#4f6257] text-2xl mt-6 max-w-2xl mx-auto">
            Pizzas artesanales hechas con ingredientes
            frescos y mucho amor.
          </p>

        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 mt-20">

          {/* LEFT */}
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

          {/* RIGHT */}
          <div>
  <ExtrasCard />
  <ComboCard />
</div>

        </div>

      </div>
    </section>
  );
};