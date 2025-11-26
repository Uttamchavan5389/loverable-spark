import { Wrench, Zap, PaintBucket, Settings } from "lucide-react";
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
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            🏍 Best Bike Service in Hyderabad | Expert Repairs & Maintenance
          </h2>
          <div className="space-y-2 text-muted-foreground max-w-3xl mx-auto">
            <p>
              <strong>Bike Service in Hyderabad</strong> – Expert two-wheeler repairs, maintenance & doorstep assistance at affordable rates. Book <strong>online Bike Service in Hyderabad</strong> for quick, hassle-free solutions!
            </p>
            <p>
              <strong>Bike Mechanic Near You</strong> – Hyderabad's trusted service center for all bike models. Get reliable repairs, oil changes & full servicing with the best <strong>Bike Service in Hyderabad</strong>!
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
