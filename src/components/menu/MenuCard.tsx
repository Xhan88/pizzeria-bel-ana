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
      <div className="bg-white rounded-[28px] shadow-md overflow-hidden flex flex-col lg:flex-row">
  
        {/* IMAGE */}
        <div className="lg:w-[42%]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* CONTENT */}
        <div className="flex-1 p-8 flex flex-col justify-between">
  
          <div className="flex items-start justify-between gap-5">
  
            <div>
              <h3 className="text-5xl font-bold text-[#184d2f]">
                {title}
              </h3>
  
              <p className="text-gray-600 text-xl mt-3 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>
  
            <span className="text-[#c6372d] text-4xl font-bold whitespace-nowrap">
              {price}
            </span>
  
          </div>
  
          {/* TAGS */}
          <div className="flex gap-6 mt-8 flex-wrap">
  
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="text-[#5b6d61] text-lg"
              >
                {tag}
              </span>
            ))}
  
          </div>
  
        </div>
      </div>
    );
  };