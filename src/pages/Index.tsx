import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandSlider } from "@/components/BrandSlider";
import { ServicesPreview } from "@/components/ServicesPreview";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppFloat />
      
      <main className="flex-1">
        <Hero />
        <BrandSlider />
        <ServicesPreview />
        <WhyChooseUs />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
