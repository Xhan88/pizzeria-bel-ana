interface GalleryCardProps {
    image: string;
    size: string;
  }
  
  const GalleryCard = ({ image, size }: GalleryCardProps) => {
    return (
      <div
        className={`
          overflow-hidden rounded-[35px]
          ${size === "big" ? "md:col-span-2 md:row-span-2" : ""}
        `}
      >
        <img
          src={image}
          className="w-full h-full object-cover hover:scale-105 duration-700"
        />
      </div>
    );
  };
  
  export default GalleryCard;