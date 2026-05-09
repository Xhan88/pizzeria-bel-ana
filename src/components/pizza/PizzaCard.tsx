type PizzaCardProps = {
    name: string;
    description: string;
    price: string;
    image: string;
  };
  
  export const PizzaCard = ({
    name,
    description,
    price,
    image,
  }: PizzaCardProps) => {
    return (
      <article className="bg-white rounded-[28px] shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 group">
  
        <div className="overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
  
        <div className="p-6">
  
          <h3 className="text-[2rem] font-bold text-green-900">
            {name}
          </h3>
  
          <p className="text-gray-700 mt-3 leading-relaxed text-lg min-h-[90px]">
            {description}
          </p>
  
          <span className="block mt-5 text-red-700 text-3xl font-bold">
            {price}
          </span>
  
        </div>
      </article>
    );
  };