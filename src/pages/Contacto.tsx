import ContactCTA from "../components/contacto/ContactCTA";
import ContactForm from "../components/contacto/ContactForm";
import ContactHero from "../components/contacto/ContactHero";
import ContactInfo from "../components/contacto/ContactInfo";
import ContactMap from "../components/contacto/ContactMap";

export const Contacto = () => {
    return (
      <div>
        <ContactHero />
        <ContactInfo />
        <div className="max-w-7xl mx-auto px-6 mt-14">

            <div className="grid lg:grid-cols-2 gap-8 items-stretch">

              <ContactForm />

              <ContactMap />

            </div>

            </div>
            <ContactCTA />
         </div>

         
    );
  };