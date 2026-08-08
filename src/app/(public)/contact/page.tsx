import Hero from "@/components/contact/Hero/Hero";
import ContactInfo from "@/components/contact/ContactInfo/ContactInfo";
import ContactForm from "@/components/contact/Contactform/ContactForm";
import Map from "@/components/contact/map/Map";

export default function ContactPage() {
  return (
    <>
      <Hero />

      <ContactInfo />

      <ContactForm />

      <Map />
    </>
  );
}