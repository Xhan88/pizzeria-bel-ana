import { pizzas } from "../../data/pizzas";
import { PizzaCard } from "../pizza/PizzaCard";

export const FavoritePizzas = () => {
  return (
    <section className="py-28 bg-[#f7f4ef]">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-center justify-center gap-6 mb-20">

          <div className="w-24 h-[2px] bg-red-700"></div>

          <h2 className="text-5xl md:text-6xl font-bold text-green-900">
            Nuestras favoritas
          </h2>

          <div className="w-24 h-[2px] bg-red-700"></div>

        </div>

        <div  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">

          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              name={pizza.name}
              description={pizza.description}
              image={pizza.image}
            />
          ))}

        </div>
      </div>
    </section>
  );
};