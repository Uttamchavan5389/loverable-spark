import heroLogo from "@/assets/brands/hero.png";
import yamahaLogo from "@/assets/brands/yamaha.png";
import triumphLogo from "@/assets/brands/triumph.png";
import suzukiLogo from "@/assets/brands/suzuki.png";
import royalEnfieldLogo from "@/assets/brands/royal-enfield.png";
import ktmLogo from "@/assets/brands/ktm.png";
import kawasakiLogo from "@/assets/brands/kawasaki.png";
import hondaLogo from "@/assets/brands/honda.png";

const brands = [
  { name: "Hero", logo: heroLogo },
  { name: "Yamaha", logo: yamahaLogo },
  { name: "Triumph", logo: triumphLogo },
  { name: "Suzuki", logo: suzukiLogo },
  { name: "Royal Enfield", logo: royalEnfieldLogo },
  { name: "KTM", logo: ktmLogo },
  { name: "Kawasaki", logo: kawasakiLogo },
  { name: "Honda", logo: hondaLogo },
];

export const BrandSlider = () => {
  // Duplicate brands for seamless loop
  const allBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          We Service All Brands
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-slide hover:[animation-play-state:paused]">
            {allBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
