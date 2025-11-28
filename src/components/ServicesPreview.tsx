import { Wrench, Zap, PaintBucket, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: Wrench,
    title: "Bike General Service",
    price: "Starting from ₹999",
    features: [
      "Engine Oil Change",
      "Chain Tension Check",
      "Oil Leakage Inspection",
      "Brake Pads & Fluid Check",
      "Air Filter Cleaning",
      "Spark Plug Cleaning",
      "Clutch & Cable Adjustment",
      "Chain Lubrication",
      "Electrical System Checkup",
      "Full Greasing Service",
      "Exterior Foam Wash",
    ],
  },
  {
    icon: Zap,
    title: "Bike Electrical Repairs",
    price: "Starting from ₹499",
    features: [
      "Wiring inspection & repair",
      "Starter motor servicing",
      "Headlight/taillight fixes",
      "Battery replacement",
      "Indicator repairs",
      "Horn servicing",
    ],
  },
  {
    icon: PaintBucket,
    title: "Bike Body Work",
    price: "Starting from ₹1499",
    features: [
      "Dent removal",
      "Scratch repair",
      "Complete repainting",
      "Custom graphics",
      "Polish & waxing",
      "Decal application",
    ],
  },
  {
    icon: Settings,
    title: "Bike Engine Services",
    price: "Starting from ₹9999",
    features: [
      "Engine overhaul",
      "Carburetor cleaning",
      "Performance tuning",
      "Engine oil change",
      "Coolant service",
      "Spark plug replacement",
    ],
  },
];

export const ServicesPreview = () => {
  const navigate = useNavigate();

  const handleViewAllServices = () => {
    // Scroll to top immediately before navigation
    window.scrollTo({ top: 0, behavior: "instant" });
    navigate("/services");
  };

  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            🏍 Best Bike Service in Hyderabad | Expert Repairs & 
            <br /> Maintenance 
            <div className="mx-auto mt-2 mb-3 h-1 w-16 rounded-full bg-orange-400"></div>
          </h2>
          <div className="space-y-2 text-muted-foreground max-w-3xl mx-auto">
            <p>
              <strong>Bike Service in Hyderabad</strong> – Professional two-wheeler repairs, routine maintenance, and doorstep support at fair prices. Book your <strong>Online Bike Service in Hyderabad</strong> for quick checkups, clear estimates, and same-day work.
            </p>
            <p>
              <strong>Bike Mechanic Near You</strong> – Hyderabad's trusted workshop for all bike models. Get dependable servicing, smooth tuning, and expert care from skilled mechanics. Experience the best <strong>Bike Service in Hyderabad</strong> with honest service and real attention to your ride.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-300 hover:bg-primary hover:text-primary-foreground transition-colors h-12 px-8 text-base font-semibold"
            onClick={handleViewAllServices}
          >
            View All Services →
          </Button>
        </div>
      </div>
    </section>
  );
};
