import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const handleSocialMediaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toast({
      title: "Coming Soon!",
      description: (
        <span className="italic">
          This feature is coming soon. Stay tuned for updates!
        </span>
      ),
    });
  };

  const handleFooterClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // Handle navigation to separate pages
    if (sectionId === "services" && location.pathname !== "/services") {
      navigate("/services");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
      return;
    }
    
    if (sectionId === "about" && location.pathname !== "/about") {
      navigate("/about");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
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
    
    // Handle home navigation - go to home page and scroll to top (no hash)
    if (sectionId === "home") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      } else {
        // Remove hash from URL if present
        if (window.location.hash) {
          window.history.pushState(null, "", "/");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    
    // Handle anchor links on home page - update URL hash and scroll
    if (location.pathname === "/") {
      // Update URL hash
      window.history.pushState(null, "", `#${sectionId}`);
      
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
    } else {
      // If not on home page, just scroll (shouldn't happen for these sections, but handle it)
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
    }
  };

  return (
    <footer className="bg-[#0d1b3f] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Mobile: Stacked rows (360px-580px), Desktop: Grid layout */}
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Row 1: HyderabadBikeMechanic — title, description, and "Formerly Sree Ram Bike Mechanic" */}
          <div className="w-full">
            <h3 className="text-lg sm:text-lg md:text-xl font-bold mb-2 text-white">HyderabadBikeMechanic</h3>
            <div className="w-16 h-0.5 bg-orange-500 mb-4"></div>
            <p className="text-sm text-white mb-2">
              <span className="italic">Aapki bike ka saccha saathi!</span> <br />Serving Hyderabad since 1990 with 40+ years of trusted experience.
            </p>
            {/* <p className="text-sm text-gray-400 mb-4">
              Formerly Sree Ram Bike Mechanic
            </p> */}
            {/* Social Media Icons - show on all screen sizes */}
            <div className="flex gap-3">
              <a href="#" onClick={handleSocialMediaClick} className="text-white hover:text-orange-400 transition-colors w-8 h-8 flex items-center justify-center border border-white rounded-full hover:border-orange-400 bg-[#0d1b3f] md:text-gray-300 md:hover:text-white md:border-gray-300 md:hover:border-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" onClick={handleSocialMediaClick} className="text-white hover:text-orange-400 transition-colors w-8 h-8 flex items-center justify-center border border-white rounded-full hover:border-orange-400 bg-[#0d1b3f] md:text-gray-300 md:hover:text-white md:border-gray-300 md:hover:border-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" onClick={handleSocialMediaClick} className="text-white hover:text-orange-400 transition-colors w-8 h-8 flex items-center justify-center border border-white rounded-full hover:border-orange-400 bg-[#0d1b3f] md:text-gray-300 md:hover:text-white md:border-gray-300 md:hover:border-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Row 2: Quick Links — Home, About Us, Services, Gallery, Testimonials, FAQ, Contact */}
          <div className="w-full">
            <h4 className="text-lg sm:text-lg md:text-xl font-bold mb-2 text-white">Quick Links</h4>
            <div className="w-16 h-0.5 bg-orange-500 mb-4"></div>
            <ul className="space-y-2 text-sm">
              <li><a href="/" onClick={(e) => handleFooterClick(e, "home")} className="text-white hover:text-orange-400 transition-colors md:text-gray-300 md:hover:text-white">Home</a></li>
              <li><a href="/about" onClick={(e) => handleFooterClick(e, "about")} className="text-white hover:text-orange-400 transition-colors md:text-gray-300 md:hover:text-white">About Us</a></li>
              <li><a href="/services" onClick={(e) => handleFooterClick(e, "services")} className="text-white hover:text-orange-400 transition-colors md:text-gray-300 md:hover:text-white">Services</a></li>
              <li><a href="#gallery" onClick={(e) => handleFooterClick(e, "gallery")} className="text-white hover:text-orange-400 transition-colors md:text-gray-300 md:hover:text-white">Gallery</a></li>
              <li><a href="#testimonials" onClick={(e) => handleFooterClick(e, "testimonials")} className="text-white hover:text-orange-400 transition-colors md:text-gray-300 md:hover:text-white">Testimonials</a></li>
              <li><a href="#faq" onClick={(e) => handleFooterClick(e, "faq")} className="text-white hover:text-orange-400 transition-colors md:text-gray-300 md:hover:text-white">FAQ</a></li>
              <li><a href="#contact" onClick={(e) => handleFooterClick(e, "contact")} className="text-white hover:text-orange-400 transition-colors md:text-gray-300 md:hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Row 3: Our Services — Full Bike & Scooter Servicing, Engine Tuning & Restoration, Brake & Clutch Repair, Oil Change & Maintenance, Genuine Spare Parts, Accessories */}
          <div className="w-full">
            <h4 className="text-lg sm:text-lg md:text-xl font-bold mb-2 text-white">Our Services</h4>
            <div className="w-16 h-0.5 bg-orange-500 mb-4"></div>
            <ul className="space-y-2 text-sm">
              <li className="text-white md:text-gray-300">Full Bike & Scooter Servicing</li>
              <li className="text-white md:text-gray-300">Engine Tuning & Restoration</li>
              <li className="text-white md:text-gray-300">Brake & Clutch Repair</li>
              <li className="text-white md:text-gray-300">Oil Change & Maintenance</li>
              <li className="text-white md:text-gray-300">Genuine Spare Parts</li>
              <li className="text-white md:text-gray-300">Accessories</li>
            </ul>
          </div>

          {/* Row 4: Contact Us — Address, Phone, Email, Social Media Icons */}
          <div className="w-full">
            <h4 className="text-lg sm:text-lg md:text-xl font-bold mb-2 text-white">Contact Us</h4>
            <div className="w-16 h-0.5 bg-orange-500 mb-4"></div>
            <ul className="space-y-2 text-sm text-white md:text-gray-300">
              <li>📍 Sattanna Galli, Opp. Hara Darwaza, Karwan, Hyderabad - 500006</li>
              <li>📞 +91 95338 19551</li>
              <li>📞 +91 70977 97743</li>
              <li>✉️ info@hyderabadbikemechanic.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 HyderabadBikeMechanic. All rights reserved. | <span className="text-orange-400">Formerly Sree Ram Bike Mechanic</span></p>
        </div>
      </div>
    </footer>
  );
};
