import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Franchise = () => {
  const benefits = [
    "Comprehensive training programs",
    "Brand recognition and marketing",
    "Operational systems and technology",
    "Ongoing technical support",
    "Supply chain management",
  ];

  return (
    <section id="franchise" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <div className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600 mb-4">
              🏆 Join India's fastest growing bike service network
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Own a Smart Garrage Franchise
            </h2>
            
            <p className="text-muted-foreground mb-6">
              With our proven business model and complete support system, you can establish a profitable bike service center in your area. We provide:
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="#contact">GET FRANCHISE DETAILS</a>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
                alt="Smart Garrage Franchise"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
