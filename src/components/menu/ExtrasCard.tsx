const extras = [
    { name: "Queso extra", price: "$2.000" },
    { name: "Pepperoni extra", price: "$2.500" },
    { name: "Champiñones", price: "$1.500" },
    { name: "Aceitunas", price: "$1.500" },
    { name: "Pollo", price: "$2.500" },
    { name: "Borde de queso", price: "$3.000" },
  ];
  
  export const ExtrasCard = () => {
    return (
      <div className="bg-white rounded-[28px] p-8 shadow-md">
  
        <h3 className="text-5xl font-bold text-[#184d2f] text-center">
          Extras
        </h3>
  
        <div className="space-y-6 mt-10">
  
          {extras.map((extra, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-xl"
            >
              <span className="text-[#44564a]">
                {extra.name}
              </span>
  
              <span className="text-[#c6372d] font-bold">
                {extra.price}
              </span>
            </div>
          ))}
  
        </div>
  
      </div>
    );
  };