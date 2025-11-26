import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

export const HeroNew = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-[#007bff] via-[#00c6ff] to-[#007bff] text-white" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1920")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay',
    }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#007bff]/95 via-[#00c6ff]/90 to-[#007bff]/95" />
      
      {/* Floating emoji decorations */}
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">🏍️</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-10 animate-float" style={{ animationDelay: "1s" }}>⚙️</div>

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            ONLINE <span className="text-orange-400">PROFESSIONAL BIKE SERVICE</span> & REPAIRS IN HYDERABAD
          </h1>
          
          <p className="mb-8 text-lg md:text-xl">
            Get professional two-wheeler servicing and repairs across Hyderabad.
          </p>

          {/* Badge Pills */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/20 text-white px-4 py-2 text-sm">
              🏍 Free Pick-up & Drop
            </Badge>
            <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/20 text-white px-4 py-2 text-sm">
              🛡 Service Warranty
            </Badge>
            <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/20 text-white px-4 py-2 text-sm">
              ⚙ Genuine Parts
            </Badge>
            <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/20 text-white px-4 py-2 text-sm">
              ⚡ Same-Day Delivery
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" asChild>
              <a href="#contact">
                📅 BOOK A BIKE SERVICE
              </a>
            </Button>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg" asChild>
              <a href="tel:+919999999999">
                <Phone className="mr-2 h-5 w-5" />
                CALL NOW
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="h-2 w-2 rounded-full bg-white"></div>
        <div className="h-2 w-2 rounded-full bg-white/50"></div>
      </div>
    </section>
  );
};
