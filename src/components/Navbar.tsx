import { useState } from "react";
import { Menu, X, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white group-hover:scale-110 transition-transform">
              <Wrench className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-foreground">Hyderabad</span>
              <span className="text-lg font-bold leading-tight text-primary">BikeMechanic</span>
            </div>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium transition-colors hover:text-primary text-foreground">
            Home
          </a>
          <a href="#why-choose-us" className="text-sm font-medium transition-colors hover:text-primary text-foreground">
            About
          </a>
          <a href="#services" className="text-sm font-medium transition-colors hover:text-primary text-foreground">
            Services
          </a>
          <a href="#gallery" className="text-sm font-medium transition-colors hover:text-primary text-foreground">
            Gallery
          </a>
          <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary text-foreground">
            Testimonials
          </a>
          <a href="#faq" className="text-sm font-medium transition-colors hover:text-primary text-foreground">
            FAQ
          </a>
          <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary text-foreground">
            Contact
          </a>
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
              <a href="#home" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
                Home
              </a>
              <a href="#why-choose-us" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
                About
              </a>
              <a href="#services" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
                Services
              </a>
              <a href="#gallery" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
                Gallery
              </a>
              <a href="#testimonials" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
                Testimonials
              </a>
              <a href="#faq" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
                FAQ
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
