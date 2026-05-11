import GalleryCard from "./GalleryCard";
import { galleryImages } from "./galleryData";

const Gallery = () => {
  return (
    <section className="py-28 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-[#c97b36] font-semibold">
            Galería
          </p>

          <h2 className="text-6xl font-black text-[#2b1d15] mt-4">
            Hechas con pasión
          </h2>
        </div> */}

        <section className="w-full py-5  overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* TOP HEADER */}
    <div className="flex flex-col items-center text-center ">

      {/* ICON + LINES */}
      <div className="flex items-center gap-6 ">

        <div className="w-16 h-[2px] bg-[#d62828]" />

        <img
          src="/icons/camera.png"
          alt="camera"
          className="w-14"
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