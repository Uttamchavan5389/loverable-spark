import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Handle click navigation with smooth scroll
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Handle navigation to separate pages
    if (sectionId === "services" && location.pathname !== "/services") {
      navigate("/services");
      return;
    }
    
    if (sectionId === "about" && location.pathname !== "/about") {
      navigate("/about");
      return;
    }
    
    // If already on the page, scroll to top
    if ((location.pathname === "/services" && sectionId === "services") ||
        (location.pathname === "/about" && sectionId === "about")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    // If on a separate page and clicking other links, navigate to home first
    if ((location.pathname === "/services" || location.pathname === "/about") && 
        sectionId !== "services" && sectionId !== "about") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
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
      return;
    }
    
    // Handle anchor links on home page
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Detect active section on scroll (only on home page)
  useEffect(() => {
    if (location.pathname !== "/") {
      // If on services page, set active section to services
      if (location.pathname === "/services") {
        setActiveSection("services");
      }
      // If on about page, set active section to about
      if (location.pathname === "/about") {
        setActiveSection("about");
      }
      return;
    }

    const handleScroll = () => {
      const sections = ["home", "why-choose-us", "services", "gallery", "testimonials", "faq", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

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
          <a 
            href="#home" 
            onClick={(e) => handleClick(e, "home")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "home" ? "text-primary" : "text-foreground"
            }`}
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleClick(e, "about")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "about" ? "text-primary" : "text-foreground"
            }`}
          >
            About
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleClick(e, "services")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "services" ? "text-primary" : "text-foreground"
            }`}
          >
            Services
          </a>
          <a 
            href="#gallery" 
            onClick={(e) => handleClick(e, "gallery")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "gallery" ? "text-primary" : "text-foreground"
            }`}
          >
            Gallery
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => handleClick(e, "testimonials")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "testimonials" ? "text-primary" : "text-foreground"
            }`}
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            onClick={(e) => handleClick(e, "faq")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "faq" ? "text-primary" : "text-foreground"
            }`}
          >
            FAQ
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleClick(e, "contact")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "contact" ? "text-primary" : "text-foreground"
            }`}
          >
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
              <a 
                href="#home" 
                onClick={(e) => handleClick(e, "home")}
                className={`text-sm font-medium ${
                  activeSection === "home" ? "text-primary" : "text-foreground"
                }`}
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleClick(e, "about")}
                className={`text-sm font-medium ${
                  activeSection === "about" ? "text-primary" : "text-foreground"
                }`}
              >
                About
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleClick(e, "services")}
                className={`text-sm font-medium ${
                  activeSection === "services" ? "text-primary" : "text-foreground"
                }`}
              >
                Services
              </a>
              <a 
                href="#gallery" 
                onClick={(e) => handleClick(e, "gallery")}
                className={`text-sm font-medium ${
                  activeSection === "gallery" ? "text-primary" : "text-foreground"
                }`}
              >
                Gallery
              </a>
              <a 
                href="#testimonials" 
                onClick={(e) => handleClick(e, "testimonials")}
                className={`text-sm font-medium ${
                  activeSection === "testimonials" ? "text-primary" : "text-foreground"
                }`}
              >
                Testimonials
              </a>
              <a 
                href="#faq" 
                onClick={(e) => handleClick(e, "faq")}
                className={`text-sm font-medium ${
                  activeSection === "faq" ? "text-primary" : "text-foreground"
                }`}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleClick(e, "contact")}
                className={`text-sm font-medium ${
                  activeSection === "contact" ? "text-primary" : "text-foreground"
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
