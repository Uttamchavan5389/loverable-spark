import { Navbar } from "@/components/Navbar";
import { HeroNew } from "@/components/HeroNew";
import { BrandSlider } from "@/components/BrandSlider";
import { ServicesPreview } from "@/components/ServicesPreview";
import { HowWeWork } from "@/components/HowWeWork";
import { Gallery } from "@/components/Gallery";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppFloat />
      
      <main className="flex-1">
        <HeroNew />
        <BrandSlider />
        <ServicesPreview />
        <HowWeWork />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
