import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Wrench, Zap, Settings, Droplet, Gauge, Shield, Battery, Sparkles, AlertTriangle, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "General Service",
    price: "Starting from ₹999",
    description: "Complete bike maintenance package for optimal performance",
    features: [
      "Engine Oil Change (Premium)",
      "Air Filter Clean/Replace",
      "Chain Tension & Lubrication",
      "Brake Pad Inspection",
      "Clutch Cable Adjustment",
      "Throttle Cable Check",
      "Spark Plug Check",
      "Battery Water Level",
      "Tire Pressure Check",
      "All Bolts & Nuts Tightening",
    ],
  },
  {
    icon: Zap,
    title: "Electrical Repairs",
    price: "Starting from ₹499",
    description: "Expert diagnosis and repair of all electrical components",
    features: [
      "Complete Wiring Inspection",
      "Battery Replacement",
      "Headlight & Tail Light Repair",
      "Turn Signal Replacement",
      "Horn Repair/Replacement",
      "Ignition Switch Repair",
      "Fuse Box Check",
      "Voltage Regulator Test",
      "Starter Motor Repair",
      "Speedometer Repair",
    ],
  },
  {
    icon: Settings,
    title: "Engine Repairs",
    price: "Starting from ₹1,999",
    description: "Professional engine diagnostics and complete overhaul services",
    features: [
      "Complete Engine Diagnosis",
      "Cylinder Boring & Honing",
      "Piston & Ring Replacement",
      "Valve Grinding & Adjustment",
      "Carburetor Cleaning",
      "Fuel Injector Service",
      "Timing Chain Replacement",
      "Engine Gasket Replacement",
      "Crankshaft Inspection",
      "Camshaft Service",
    ],
  },
  {
    icon: Droplet,
    title: "Oil & Fluids Service",
    price: "Starting from ₹799",
    description: "Premium quality lubricants and fluid replacement",
    features: [
      "Engine Oil Change (Synthetic)",
      "Engine Oil Filter",
      "Coolant Flush & Refill",
      "Brake Fluid Replacement",
      "Fork Oil Change",
      "Gear Oil Change",
      "Chain Lube Application",
      "Clutch Fluid Check",
      "Battery Water Top-up",
      "Windshield Washer Fluid",
    ],
  },
  {
    icon: Gauge,
    title: "Performance Upgrade",
    price: "Starting from ₹2,499",
    description: "Enhance your bike's power and performance",
    features: [
      "ECU Remapping",
      "Air Filter Upgrade",
      "Exhaust System Upgrade",
      "Sprocket Modification",
      "Carburetor Tuning",
      "Performance Spark Plugs",
      "Chain Upgrade",
      "Suspension Tuning",
      "Brake Pad Upgrade",
      "Throttle Response Tuning",
    ],
  },
  {
    icon: Shield,
    title: "Safety Inspection",
    price: "Starting from ₹299",
    description: "Comprehensive safety check for worry-free riding",
    features: [
      "Brake System Inspection",
      "Tire Condition Check",
      "Suspension Check",
      "Steering Check",
      "Frame Inspection",
      "Lights & Indicators Test",
      "Horn Functionality",
      "Mirror Adjustment",
      "Side Stand Spring Check",
      "Overall Safety Assessment",
    ],
  },
  {
    icon: Battery,
    title: "Battery Service",
    price: "Starting from ₹1,200",
    description: "Complete battery testing and replacement service",
    features: [
      "Battery Health Check",
      "Load Test",
      "Battery Replacement",
      "Terminal Cleaning",
      "Voltage Test",
      "Charging System Check",
      "Battery Water Top-up",
      "Battery Bracket Check",
      "Connection Tightening",
      "6-Month Warranty",
    ],
  },
  {
    icon: Sparkles,
    title: "Detailing & Wash",
    price: "Starting from ₹399",
    description: "Professional cleaning and detailing service",
    features: [
      "Deep Pressure Wash",
      "Engine Bay Cleaning",
      "Chain Clean & Lube",
      "Dashboard Polish",
      "Chrome Polishing",
      "Paint Protection",
      "Seat Cleaning",
      "Wheel Deep Clean",
      "Underbody Wash",
      "Final Inspection",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Accidental Repair",
    price: "Starting from ₹2,999",
    description: "Complete accident damage repair including body work and part replacement",
    features: [
      "Complete Damage Assessment",
      "Body Denting & Painting",
      "Frame Alignment Check",
      "Parts Replacement",
      "Panel Beating Work",
      "Paint Matching & Refinishing",
      "Structural Repairs",
      "Insurance Claim Support",
      "Quality Assurance Check",
      "Post-Repair Warranty",
    ],
  },
  {
    icon: FileText,
    title: "Bike Insurance (Tie Up)",
    price: "Best Rates Available",
    description: "Hassle-free bike insurance solutions with multiple providers",
    features: [
      "Multiple Insurance Providers",
      "Competitive Premium Rates",
      "Comprehensive Coverage",
      "Third-Party Insurance",
      "Easy Documentation Process",
      "Quick Policy Issuance",
      "Claim Processing Support",
      "Policy Renewal Assistance",
      "Add-On Cover Options",
      "Free Consultation",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppFloat />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-background to-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">Our Services</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Comprehensive Bike Services
                </span>
                <br />
                in Hyderabad
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Expert two-wheeler repair, maintenance & performance upgrades. Transparent pricing, genuine parts & warranty assured.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="card-hover border-2 hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {service.price}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-0.5 font-bold">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full hero-gradient" asChild>
                        <a href="/#contact">Book Now</a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Service?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with us today and experience the best bike service in Hyderabad
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="hero-gradient" asChild>
                <a href="/#contact">Book Service Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+919999999999">Call Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
