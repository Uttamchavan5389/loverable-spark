import { useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Wrench, Shield, Clock, Star, MessageCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroFallback1 from "@/assets/hero/hero-mechanic.jpg";
import heroFallback2 from "@/assets/hero/hero-slide-2.jpg";
import heroFallback3 from "@/assets/hero/hero-slide-3.jpg";
import heroFallback4 from "@/assets/hero/hero-slide-4.jpg";
import heroFallback5 from "@/assets/hero/hero-slide-5.jpg";

export const HeroNew = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const heroSlides = useMemo(() => {
    // Automatically fetch all images from hero folder and subfolders
    // This works at build time - all images will be included in the production build
    const modules = import.meta.glob<{ default: string }>(
      "@/assets/hero/**/*.{jpg,png,jpeg,webp}",
      { eager: true }
    );

    const images = Object.values(modules).map((mod) => mod.default);

    if (images.length === 0) {
      return [
        { image: heroFallback1, alt: "Professional bike mechanic at work" },
        { image: heroFallback2, alt: "Expert motorcycle engine repair in Hyderabad" },
        { image: heroFallback3, alt: "Multiple bikes being serviced in professional workshop" },
        { image: heroFallback4, alt: "Satisfied customer receiving serviced Royal Enfield" },
        { image: heroFallback5, alt: "Professional brake repair service in Hyderabad" },
  ];
    }

    return images.map((image, index) => ({
      image,
      alt: `Hero slide ${index + 1}`,
    }));
  }, []);

  return (
    <section id="home" className="relative hero-section-height overflow-hidden text-white w-full max-w-full">
      {/* Carousel with multiple images - changes every 3 seconds */}
      <div className="absolute inset-0 w-full h-full z-0 max-w-full overflow-hidden">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full max-w-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="h-full -ml-0">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="pl-0 basis-full hero-section-height max-w-full">
                <div className="relative w-full h-full hero-section-height max-w-full overflow-hidden">
                  <img 
                    src={slide.image} 
                    alt={slide.alt}
                    className="absolute inset-0 w-full h-full object-cover max-w-full"
                    style={{ display: 'block', width: '100%', height: '100%', maxWidth: '100%' }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 z-[1]"></div>
      
      {/* Content */}
      <div className="w-full max-w-full px-4 md:container md:mx-auto md:px-4 py-20 md:py-16 relative z-10 hero-section-height flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trusted Badge */}
          <Badge className="mb-4 bg-orange-500 text-white drop-shadow-lg px-4 py-2 text-sm font-semibold">
            🏆 Trusted Since 1990
          </Badge>

          {/* Main Title */}
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-2xl">
            <span className="text-white">Trusted Bike & EV Bike Service in </span>
            <span className="text-blue-400">Hyderabad</span>
            <span className="text-white"> 🛠️</span>
          </h1>
          
          {/* Subtitle */}
          <p className="mb-8 text-lg md:text-xl text-gray-200 drop-shadow-xl">
            Sree Ram Bike Mechanic — Your reliable partner for all two-wheeler repairs and maintenance ⚡
          </p>

          {/* Feature Boxes */}
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-gray-300/20 rounded-lg px-6 py-4 flex items-center gap-3">
              <Wrench className="h-5 w-5 text-blue-400" />
              <span className="text-white font-medium">40+ Years Experience</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-gray-300/20 rounded-lg px-6 py-4 flex items-center gap-3">
              <Clock className="h-5 w-5 text-blue-400" />
              <span className="text-white font-medium">Quick Turnaround</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-gray-300/20 rounded-lg px-6 py-4 flex items-center gap-3">
              <Shield className="h-5 w-5 text-blue-400" />
              <span className="text-white font-medium">Genuine Parts</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" asChild>
              <a href="#contact">
                <Phone className="mr-2 h-5 w-5" />
                Book Service
              </a>
            </Button>
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-6 text-lg" asChild>
              <a href="https://wa.me/919533819551?text=Hi%20I%20want%20to%20book%20a%20service" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white">4.9/5 on Google</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400 font-bold">1000+</span>
              <span className="text-white">Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400 font-semibold">Warranty</span>
              <span className="text-gray-300">on Repairs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
