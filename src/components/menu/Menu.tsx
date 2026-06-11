
interface PizzaItem {
  name: string;
  description?: string;
}

interface MenuSection {
  title: string;
  items: PizzaItem[];
}

const menuData: MenuSection[] = [
  {
    title: "Clásicas",
    items: [
      {
        name: "Margarita",
        description:
          "Salsa de tomate, hojas de albahaca, jitomate cherry y mozzarella.",
      },
      {
        name: "Peperoni",
      },
      {
        name: "Vegetariana",
        description:
          "Champiñones, pimiento, aceitunas negras y albahaca.",
      },
      {
        name: "Hawaiana",
        description: "Jamón y piña.",
      },
      {
        name: "Florentina",
        description: "Salchicha, cebolla y champiñones.",
      },
      {
        name: "Tradicional",
        description: "Peperoni, jamón y champiñones.",
      },
    ],
  },
  {
    title: "Especiales",
    items: [
      {
        name: "Italiana",
        description:
          "Peperoni, champiñones, pimiento verde y aceitunas negras.",
      },
      {
        name: "Brava",
        description:
          "Peperoni, chorizo, pimiento morrón y chile triturado.",
      },
      {
        name: "Mexicana",
        description: "Chorizo, jalapeño, tocino y cebolla.",
      },
      {
        name: "Carnes Frías",
        description: "Jamón, pepperoni y salchicha.",
      },
    ],
  },
];

const houseSpecials: PizzaItem[] = [
  {
    name: "Belana",
    description:
      "Jamón, pepperoni, aceitunas negras, pimiento verde y champiñones.",
  },
  {
    name: "Porccino",
    description: "Salami, pepperoni, jamón y tocino.",
  },
  {
    name: "Primavera",
    description:
      "Champiñones, jitomate cherry, pepperoni, albahaca y orégano.",
  },
  {
    name: "Pastor",
    description: "Carne al pastor, piña y cebolla.",
  },
];

const MenuItem = ({ item }: { item: PizzaItem }) => (
  <div className="border-b border-[#8B1E2D]/40 pb-6">
    <h3 className="text-xl font-bold uppercase tracking-wide text-[#7A1221]">
      {item.name}
    </h3>

    {item.description && (
      <p className="mt-1 text-gray-700 italic leading-relaxed">
        {item.description}
      </p>
    )}
  </div>
);

const MenuSection = ({ section }: { section: MenuSection }) => (
  <section>
    <h2 className="mb-8 text-4xl font-extrabold uppercase text-[#7A1221]">
      {section.title}
    </h2>

    <div className="space-y-8">
      {section.items.map((item) => (
        <MenuItem key={item.name} item={item} />
      ))}
    </div>
  </section>
);

export default function Menu() {
  return (
    <section className="bg-[#F1E9DE] py-20 rounded-lg">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Columna izquierda */}
          <div className="space-y-20">
            {menuData.map((section) => (
              <MenuSection key={section.title} section={section} />
            ))}
          </div>

          {/* Columna derecha */}
          <div>
            <h2 className="mb-8 text-4xl font-extrabold uppercase text-[#7A1221]">
              De la Casa
            </h2>

            <div className="space-y-8">
              {houseSpecials.map((item) => (
                <MenuItem key={item.name} item={item} />
              ))}
            </div>

            <div className="mt-20">
              <h2 className="mb-8 text-4xl font-extrabold uppercase text-[#7A1221]">
                Lasagna
              </h2>

              <div className="space-y-6">
                <div className="border-b border-[#8B1E2D]/40 pb-4">
                  <h3 className="font-bold uppercase text-[#7A1221]">
                    Individual
                  </h3>
                </div>

                <div className="border-b border-[#8B1E2D]/40 pb-4">
                  <h3 className="font-bold uppercase text-[#7A1221]">
                    Mediana
                  </h3>
                  <p className="italic text-gray-600">Sobre pedido</p>
                </div>

                <div className="border-b border-[#8B1E2D]/40 pb-4">
                  <h3 className="font-bold uppercase text-[#7A1221]">
                    Grande
                  </h3>
                  <p className="italic text-gray-600">Sobre pedido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}