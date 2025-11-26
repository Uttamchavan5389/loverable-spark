import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Sree Ram Bike Mechanic</h3>
            <p className="text-sm opacity-80 mb-4">
              Trusted bike service in Hyderabad since 1980. Expert care for all two-wheelers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="/" className="hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="/services" className="hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#why-choose-us" className="hover:opacity-100 transition-opacity">Why Us</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>General Service</li>
              <li>Engine Repairs</li>
              <li>Electrical Repairs</li>
              <li>Oil Changes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Phone: +91 99999 99999</li>
              <li>Email: contact@sreerambikeservice.com</li>
              <li>Hyderabad, Telangana</li>
              <li>Mon-Sat: 9 AM - 7 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>© 2024 Sree Ram Bike Mechanic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
