import { ArrowRight, Shield, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-16 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl animate-float">🏍️</div>
        <div className="absolute bottom-20 right-10 text-6xl animate-float" style={{ animationDelay: "1s" }}>⚙️</div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm">
              <span className="text-primary">●</span> Trusted Since 1980
            </div>
            
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Expert Bike Service
              </span>
              <br />
              <span className="text-foreground">in Hyderabad</span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground sm:text-xl max-w-2xl">
              40+ years of excellence • Genuine parts • Free pickup & delivery • Transparent pricing
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="hero-gradient text-base" asChild>
                <a href="#contact">
                  Book Service Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="tel:+919999999999">Call Now</a>
              </Button>
              <Button size="lg" className="bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp))]/90 text-white" asChild>
                <a href="https://wa.me/919533819551?text=Hi%20I%20want%20to%20book%20a%20service" target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold">4.9 Google Rating</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">Warranty Assured</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold">40+ Years</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800"
                alt="Professional bike mechanic working on motorcycle"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
