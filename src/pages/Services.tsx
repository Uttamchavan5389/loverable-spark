import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Wrench, Zap, Settings, Droplet, Gauge, Shield, Battery, Sparkles, AlertTriangle, FileText, PlugZap, Phone, ChevronDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { getServiceImage } from "@/utils/getServiceImage";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      "Battery Check & Replacement",
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
    icon: PlugZap,
    title: "EV Bike Service",
    price: "Starting from ₹1,499",
    description: "Expert servicing for electric bikes (excluding battery repairs)",
    features: [
      "Complete EV Bike Health Check",
      "Motor & Controller Diagnostics",
      "Wiring & Connector Inspection",
      "Regenerative Braking System Check",
      "Brake & Suspension Tuning",
      "Tyre & Wheel Alignment",
      "Noise & Vibration Inspection",
      "Final Road Test & Report",
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

const additionalServices = [
  {
    name: "Engine Tuning",
    price: "Starting from ₹1,499",
  },
  {
    name: "Brake Pad Replacement",
    price: "Starting from ₹599",
  },
  {
    name: "Chain & Sprocket Set",
    price: "Starting from ₹1,299",
  },
  {
    name: "Clutch Plate Replacement",
    price: "Starting from ₹899",
  },
  {
    name: "Carburetor Service",
    price: "Starting from ₹699",
  },
  {
    name: "Fork Throw/Replacement",
    price: "Starting from ₹799",
  },
];

// Name-only additional services (4 cards)
const extraAdditionalServices = [
  { name: "Suspension Replacement" },
  { name: "Seat Cover Replacement" },
  { name: "General Troubleshooting" },
  { name: "Mirror & Handle Adjust/Replacement" },
];

// Combined list so that grid auto-wraps: 4 cards (row 1), 4 cards (row 2), 2 cards (row 3)
const allAdditionalServices: { name: string; price?: string }[] = [
  ...additionalServices,
  ...extraAdditionalServices.map((item) => ({ name: item.name })),
];

const Services = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/#contact");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppFloat />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[hsl(20,100%,92%)] via-[hsl(210,30%,97%)] to-[hsl(211,100%,96%)] py-16 md:py-24 overflow-hidden">
          {/* Floating animated tools */}
          <div className="absolute top-10 right-10 md:top-20 md:right-20 text-6xl md:text-8xl opacity-40 animate-float-mechanic pointer-events-none">
            🔧
          </div>
          <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 text-6xl md:text-8xl opacity-30 animate-float-mechanic pointer-events-none" style={{ animationDelay: '1s' }}>
            ⚙️
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">Our Services</Badge>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Comprehensive Bike & EV
                </span>
                <br />
                <span className="text-black" style={{ marginTop: '5px', display: 'inline-block' }}>Services in Hyderabad</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Expert two-wheeler repair, maintenance & performance upgrades. Transparent pricing, genuine parts & 100% Quality.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background overflow-x-hidden">
          <div className="container mx-auto px-4 max-w-full">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
              {services.map((service, index) => {
                const Icon = service.icon;
                const serviceImage = getServiceImage(service.title);
                return (
                  <Card key={index} className="card-hover border-2 hover:border-primary/50 overflow-hidden w-full max-w-full">
                    {/* Image at the top */}
                    {serviceImage && (
                      <div className="w-full h-64 overflow-hidden rounded-t-lg relative max-w-full">
                        <img 
                          src={serviceImage} 
                          alt={service.title}
                          className="w-full h-full object-cover max-w-full block"
                          style={{ maxWidth: '100%' }}
                        />
                      </div>
                    )}
                    <CardHeader>
                      {/* Icon */}
                      <div className="mb-3">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>

                      {/* Title styled similar to home screen service cards */}
                      <CardTitle className="text-lg font-bold text-foreground mb-2">
                        {service.title}
                      </CardTitle>

                      {/* Description */}
                      <CardDescription className="mb-3">
                        {service.description}
                      </CardDescription>

                      {/* Price info pill */}
                      <div className="w-full flex justify-center">
                        <span className="inline-block rounded-full border border-[#ef4444] bg-[#ef4444] px-4 py-1 text-[10px] font-semibold text-white uppercase tracking-wide text-center">
                          Once we check your bike, we&apos;ll share the best possible price.
                        </span>
                      </div>
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
                      <Button className="w-full hero-gradient" onClick={handleBookNow}>
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-2 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Additional Services</h2>
              <p className="text-muted-foreground">
                We also offer these specialized services
              </p>
            </div>

            {/* Additional services grid: first 8 cards (4 / 4), last 2 centered row */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {allAdditionalServices.slice(0, 8).map((item) => (
                <div
                  key={item.name}
                  className="card-hover rounded-xl border-2 bg-card px-6 py-5 flex flex-col items-center text-center h-full hover:border-primary/50"
                >
                  {/* Icon */}
                  <div className="mb-3 flex justify-center">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Wrench className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  <p className="font-semibold text-foreground mb-2 text-center">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Third row: last 2 cards centered */}
            <div className="mt-6 flex flex-wrap justify-center gap-6">
              {allAdditionalServices.slice(8).map((item) => (
                <div
                  key={item.name}
                  className="card-hover w-full md:w-auto rounded-xl border-2 bg-card px-6 py-5 flex flex-col items-center text-center hover:border-primary/50"
                >
                  <div className="mb-3 flex justify-center">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Wrench className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <p className="font-semibold text-foreground mb-2 text-center">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Custom services note */}
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don&apos;t see what you&apos;re looking for? Contact us for custom services.
            </p>

            {/* What's included + notes */}
            <div className="mt-10 rounded-xl border border-primary/10 bg-primary/5 px-4 md:px-[50px] py-5 text-sm text-foreground max-w-[800px] mx-auto w-full md:h-[175px] flex flex-col">
              {/* Heading with icon */}
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-base text-foreground">
                  What&apos;s Included in All Services:
                </h3>
              </div>
              
              {/* Single column on mobile, two columns on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                <ul className="space-y-2">
                  <li>✓ Free pickup & drop (within 3km)</li>
                  <li>✓ 7-day free recheck</li>
                  <li>✓ Transparent billing</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Detailed service report</li>
                  <li>✓ Genuine parts</li>
                  <li>✓ Expert mechanics</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 text-xs text-center text-muted-foreground space-y-1">
              <p>
                * Prices may vary based on bike model. Spare parts & accessories are charged separately.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-br from-[hsl(20,100%,92%)] via-[hsl(210,30%,97%)] to-[hsl(211,100%,96%)] py-16 overflow-hidden">
          {/* Floating animated tools */}
          <div className="absolute top-10 right-10 md:top-20 md:right-20 text-6xl md:text-8xl opacity-40 animate-float-mechanic pointer-events-none">
            🔧
          </div>
          <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 text-6xl md:text-8xl opacity-30 animate-float-mechanic pointer-events-none" style={{ animationDelay: '1s' }}>
            ⚙️
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Service?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with us today and experience the best bike service in Hyderabad
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="hero-gradient" onClick={handleBookNow}>
                Get Direction
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="lg" variant="outline" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Us
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <a href="tel:+919533819551" className="flex items-center gap-2 w-full cursor-pointer">
                      <Phone className="h-4 w-4" />
                      +91 95338 19551
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="tel:+917097797743" className="flex items-center gap-2 w-full cursor-pointer">
                      <Phone className="h-4 w-4" />
                      +91 70977 97743
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
