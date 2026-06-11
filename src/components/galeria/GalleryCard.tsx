interface GalleryCardProps {
  image: string;
  size: string;
  onClick?: () => void;
}

const GalleryCard = ({
  image,
  size,
  onClick,
}: GalleryCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`
        overflow-hidden rounded-[35px] cursor-pointer
        ${size === "big" ? "md:col-span-2 md:row-span-2" : ""}
      `}
    >
      <img
        src={image}
        alt="Pizza BelAna"
        className="w-full h-full object-cover hover:scale-105 duration-700"
      />
    </div>
  );
};

export default GalleryCard;