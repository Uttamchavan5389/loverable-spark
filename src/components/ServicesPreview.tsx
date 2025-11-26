import { Wrench, Zap, Settings, Droplet, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";

const services = [
  {
    icon: Wrench,
    title: "General Service",
    description: "Comprehensive bike maintenance including oil change, chain tension, brake check & more",
    price: "₹999",
    features: ["Engine Oil Change", "Chain Lubrication", "Brake Inspection", "Air Filter Clean"],
  },
  {
    icon: Zap,
    title: "Electrical Repairs",
    description: "Expert diagnosis and repair of all electrical systems and components",
    price: "₹499",
    features: ["Wiring Inspection", "Battery Check", "Horn & Lights", "Fuse Replacement"],
  },
  {
    icon: Settings,
    title: "Engine Repairs",
    description: "Professional engine diagnostics, repairs and performance optimization",
    price: "₹1,999",
    features: ["Engine Diagnosis", "Cylinder Boring", "Valve Adjustment", "Piston Replacement"],
  },
  {
    icon: Droplet,
    title: "Oil & Fluids",
    description: "Premium quality oil changes and fluid top-ups for optimal performance",
    price: "₹799",
    features: ["Engine Oil Change", "Coolant Refill", "Brake Fluid", "Fork Oil Change"],
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Premium Bike Services in Hyderabad
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive two-wheeler repair and maintenance solutions with transparent pricing
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="card-hover border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {service.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="#contact">Book Now</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <NavLink to="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};
