import { Award, Users, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Award,
    title: "40+ Years Experience",
    description: "Four decades of trusted bike service expertise in Hyderabad",
  },
  {
    icon: Users,
    title: "Expert Mechanics",
    description: "Highly skilled and certified technicians for all bike brands",
  },
  {
    icon: Shield,
    title: "Genuine Spare Parts",
    description: "Only genuine, high-quality parts for lasting performance and reliability.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast and efficient service without compromising on quality",
  },
];

export const WhyChooseUs = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <section id="why-choose-us" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Sree Ram Bike Mechanic?
          </h2>
          {/* Orange accent line */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by thousands of riders across Hyderabad for reliable and affordable bike service
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button onClick={handleLearnMore} className="hero-gradient text-white font-medium" style={{ fontSize: '14px' }}>
            Learn More →
          </Button>
        </div>
      </div>
    </section>
  );
};
