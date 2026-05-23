type MenuCardProps = {
  image: string;
  title: string;
  description: string;
  price: string;
  tags?: string[];
};

export const MenuCard = ({
  image,
  title,
  description,
  price,
  tags,
}: MenuCardProps) => {
  return (
    <div className="bg-white rounded-[22px] shadow-md overflow-hidden flex items-center">

      <div className="w-[34%] lg:w-[42%] shrink-0 self-stretch">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 p-4 lg:p-8">

        <div className="flex justify-between gap-3">

          <div>
            <h3 className="text-[18px] lg:text-5xl font-bold text-[#184d2f] leading-none">
              {title}
            </h3>

            <p className="text-[#5d5d5d] text-[12px] lg:text-xl mt-2 leading-[1.4] lg:leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

          <span className="text-[#c6372d] text-[18px] lg:text-4xl font-bold whitespace-nowrap leading-none">
            {price}
          </span>

        </div>

        <div className="flex flex-wrap gap-4 mt-3 lg:mt-8">

          {tags?.map((tag, index) => (
            <span
              key={index}
              className="text-[#5b6d61] text-[11px] lg:text-lg"
            >
              {tag}
            </span>
          ))}

        </div>

      </div>
    </div>
  );
};