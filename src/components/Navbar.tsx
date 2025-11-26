import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              SR
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none">Sree Ram</span>
              <span className="text-xs text-muted-foreground">Bike Mechanic</span>
            </div>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className="text-sm font-medium transition-colors hover:text-primary" activeClassName="text-primary">
            Home
          </NavLink>
          <NavLink to="/services" className="text-sm font-medium transition-colors hover:text-primary" activeClassName="text-primary">
            Services
          </NavLink>
          <a href="#why-choose-us" className="text-sm font-medium transition-colors hover:text-primary">
            Why Us
          </a>
          <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href="tel:+919999999999">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </Button>
          <Button size="sm" asChild className="hero-gradient">
            <a href="#contact">Book Service</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <div className="container flex flex-col gap-4 p-4">
              <NavLink to="/" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/services" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Services
              </NavLink>
              <a href="#why-choose-us" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Why Us
              </a>
              <a href="#contact" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+919999999999">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button size="sm" asChild className="hero-gradient">
                  <a href="#contact">Book Service</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
