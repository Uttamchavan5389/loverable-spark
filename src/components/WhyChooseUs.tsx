import { Award, Users, MapPin, Clock } from "lucide-react";

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
    icon: MapPin,
    title: "Free Pickup & Delivery",
    description: "Convenient doorstep service across all areas of Hyderabad",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast and efficient service without compromising on quality",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Sree Ram Bike Mechanic?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by thousands of riders across Hyderabad for reliable and affordable bike service
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
      </div>
    </section>
  );
};
