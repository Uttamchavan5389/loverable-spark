export const Footer = () => {
  return (
    <footer className="bg-[#0d1b3f] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Smart Garrage</h3>
            <p className="text-sm text-gray-300 mb-4">
              Your trusted partner for bike services and franchise opportunities across India.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-orange-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#franchise" className="text-gray-300 hover:text-white transition-colors">Franchise</a></li>
              <li><a href="#how-we-work" className="text-gray-300 hover:text-white transition-colors">How We Work</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-orange-400">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Regular Maintenance</li>
              <li className="text-gray-300">Electrical Repairs</li>
              <li className="text-gray-300">Body Work</li>
              <li className="text-gray-300">Engine Work</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-orange-400">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📍 Macherlas, Hafelipur</li>
              <li>Hyderabad, Telangana 500078</li>
              <li>📞 +91 89196 52618</li>
              <li>✉️ smartgarrage@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 Smart Garrage. All Rights Reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms & Conditions</a></p>
        </div>
      </div>
    </footer>
  );
};
