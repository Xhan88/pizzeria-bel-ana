import { Camera } from "lucide-react";
import GalleryCard from "./GalleryCard";
import { galleryImages } from "./galleryData";

const Gallery = () => {
  return (
    <section className="py-28 ">
      <div className="max-w-7xl mx-auto px-6">


        <section className="w-full   overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* TOP HEADER */}
    <div className="flex flex-col items-center text-center ">

      {/* ICON + LINES */}
      <div className="flex items-center gap-6 ">

        <div className="w-16 h-[2px] bg-[#d62828]" />

           <Camera
            size={60}
            className="text-[#d62828]"
            />

        <div className="w-16 h-[2px] bg-[#d62828]" />

      </div>

      {/* TITLE */}
      <h2 className="text-5xl md:text-7xl font-black text-[#173d2d] leading-none">
        Nuestra galería
      </h2>

      {/* SUBTITLE */}
      <p className="text-[#d62828] text-3xl md:text-5xl mt-4 font-signature">
        Momentos que saben a pizza
      </p>

      {/* DESCRIPTION */}
      <p className="max-w-2xl text-gray-600 text-lg mt-8 leading-relaxed">
        Cada imagen cuenta una historia de pasión,
        ingredientes frescos y el amor que ponemos
        en cada pizza.
      </p>

    </div>

    {/* GALLERY GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* AQUI VAN LAS IMAGENES */}

    </div>

  </div>

</section>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[300px]">
          {galleryImages.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              size={item.size}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;