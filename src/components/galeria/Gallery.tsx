import { Camera } from "lucide-react";
import GalleryCard from "./GalleryCard";
import { galleryImages } from "./galleryData";

const Gallery = () => {
  return (
    <section className="py-18">

      <div className="max-w-7xl mx-auto px-6">

        <div className="w-full overflow-hidden">

          <div className="flex flex-col items-center text-center">

            <div className="flex items-center gap-6 mb-6">

              <div className="w-16 h-[2px] bg-[#d62828]" />

              <Camera
                size={60}
                className="text-[#d62828]"
              />

              <div className="w-16 h-[2px] bg-[#d62828]" />

            </div>

            <h2 className="text-5xl md:text-7xl font-black text-[#173d2d] leading-none">
              Nuestra galería
            </h2>

            <p className="text-[#d62828] text-3xl md:text-5xl mt-4 font-signature">
              Momentos que saben a pizza
            </p>

            <p className="max-w-2xl text-gray-600 text-lg mt-8 leading-relaxed">
              Cada imagen cuenta una historia de pasión,
              ingredientes frescos y el amor que ponemos
              en cada pizza.
            </p>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[300px] mt-20">

          {galleryImages.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              size={item.size}
            />
          ))}

        </div>

      </div>

      <section className="relative mt-24 overflow-hidden  py-14"       style={{
        backgroundImage: "url('nosotros/bg-nosotros.png')",
      }}>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">

          <h2 className="text-white text-3xl md:text-5xl font-bold">
            ¿Quieres ver más momentos deliciosos?
          </h2>

          <p className="text-white/80 mt-3 text-lg">
            Síguenos en nuestras redes sociales.
          </p>

          <div className="flex items-center gap-5 mt-8">

            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 duration-300"
            >
              <i className="ri-instagram-line text-2xl text-[#135c34]" />
            </a>

            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 duration-300"
            >
              <i className="ri-facebook-fill text-2xl text-[#135c34]" />
            </a>

            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 duration-300"
            >
              <i className="ri-whatsapp-line text-2xl text-[#135c34]" />
            </a>

          </div>
        </div>
      </section>

    </section>
  );
};

export default Gallery;