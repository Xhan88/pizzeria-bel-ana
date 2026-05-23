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
    <div className="bg-white rounded-[28px] p-5 lg:p-8 shadow-md overflow-hidden relative">

      <div className="flex items-center gap-4 justify-center lg:justify-start">

        <h3 className="text-[28px] lg:text-5xl font-bold text-[#184d2f]">
          Extras
        </h3>

        <div className="w-14 lg:w-24 h-[2px] bg-[#c6372d]" />

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-3 lg:gap-y-6 mt-6 lg:mt-10">
        {extras.map((extra, index) => (
          <div
            key={index}
            className="flex items-center text-[11px] lg:text-xl"
          >
            <span className="text-[#44564a] whitespace-nowrap">
              {extra.name}
            </span>

            <div className="flex-1 border-b border-dotted border-gray-300 mx-1 lg:mx-3 translate-y-[2px]" />

            <span className="text-[#c6372d] font-bold whitespace-nowrap">
              {extra.price}
            </span>
          </div>
        ))}

      </div>

      <img
        src="/extras-decoration.png"
        alt=""
        className="absolute bottom-0 right-0 w-20 lg:w-32 pointer-events-none"
      />

    </div>
  );
};