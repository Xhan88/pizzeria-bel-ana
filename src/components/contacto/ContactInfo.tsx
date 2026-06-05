import {
    MapPin,
    Phone,
    Clock3,
  } from "lucide-react";
  
  import { FaWhatsapp } from "react-icons/fa";
  
  const ContactInfo = () => {
    return (
      <section className="mt-20">
  
        <div className="max-w-7xl mx-auto px-6">
  
          <div className="bg-white rounded-[30px] shadow-sm border border-[#ece7df] p-10">
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
  
              <div className="flex items-start gap-5">
  
                <div className="min-w-[60px] h-[60px] rounded-full bg-[#0d4b2a] flex items-center justify-center">
  
                  <MapPin
                    size={28}
                    className="text-white"
                  />
  
                </div>
  
                <div>
  
                  <h3 className="text-3xl font-bold text-[#173d2d]">
                    Dirección
                  </h3>
  
                  <p className="text-[#4f6257] mt-4 text-lg leading-relaxed">
                    Col. Centro Gpe. Victoria #401
                    <br />
                    Col. Del Carmen. 24 de Febrero #399
                    <br />
                    Tepatitlan de Morelos Jal.
                  </p>
  
                </div>
              </div>
  
              <div className="flex items-start gap-5 border-t md:border-t-0 md:border-l border-[#ece7df] pt-8 md:pt-0 md:pl-10">
  
                
                <div className="min-w-[60px] h-[60px] rounded-full bg-[#0d4b2a] flex items-center justify-center">
  
                  <Phone
                    size={28}
                    className="text-white"
                  />
  
                </div>
  
              
                <div>
  
                  <h3 className="text-3xl font-bold text-[#173d2d]">
                    Teléfono
                  </h3>
  
                  <p className="text-[#4f6257] mt-4 text-lg leading-relaxed">
                    378 781 1916
                    <br />
                    378 688 2781
                  </p>
  
                </div>
              </div>
  
              <div className="flex items-start gap-5 border-t lg:border-t-0 lg:border-l border-[#ece7df] pt-8 lg:pt-0 lg:pl-10">
  
                <div className="min-w-[60px] h-[60px] rounded-full bg-[#0d4b2a] flex items-center justify-center">
  
                  <FaWhatsapp className="text-white text-[28px]" />
  
                </div>
  
                <div>
  
                  <h3 className="text-3xl font-bold text-[#173d2d]">
                    WhatsApp
                  </h3>
  
                  <p className="text-[#4f6257] mt-4 text-lg leading-relaxed">
                    300 123 4567
                    <br />
                    ¡Escríbenos!
                  </p>
  
                </div>
              </div>
  
        
              <div className="flex items-start gap-5 border-t lg:border-t-0 lg:border-l border-[#ece7df] pt-8 lg:pt-0 lg:pl-10">
  
         
                <div className="min-w-[60px] h-[60px] rounded-full bg-[#0d4b2a] flex items-center justify-center">
  
                  <Clock3
                    size={28}
                    className="text-white"
                  />
  
                </div>
  
                <div>
  
                  <h3 className="text-3xl font-bold text-[#173d2d]">
                    Horario
                  </h3>
  
                  <p className="text-[#4f6257] mt-4 text-lg leading-relaxed">
                    Lunes a Domingo
                    <br />
                    12:00 pm - 10:00 pm
                  </p>
  
                </div>
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  };
  
  export default ContactInfo;