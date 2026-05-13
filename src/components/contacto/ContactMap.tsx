const ContactMap = () => {
    return (
      <section className="relative overflow-hidden rounded-[35px] min-h-[850px]">
  
  
                    <iframe
            title="BelAna Pizzería"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14918.113476131062!2d-102.7635813!3d20.810359900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spizza%20bel%20ana!5e0!3m2!1ses!2smx!4v1778589662705!5m2!1ses!2smx"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
  
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl p-8 w-[320px] z-10">
  
          <h3 className="text-3xl font-bold text-[#173d2d]">
            BelAna Pizzería
          </h3>
  
          <p className="text-[#4f6257] text-lg leading-relaxed mt-4">
            Tepatitlán de Morelos
            <br />
            Jalisco, México
          </p>
  
          <a
            href="https://maps.google.com"
            target="_blank"
            className="mt-6 inline-block text-[#d62828] font-semibold"
          >
            Ver en Google Maps ↗
          </a>
  
        </div>
  
      </section>
    );
  };
  
  export default ContactMap;