import { useEffect, useRef, useState, useMemo } from "react";
import { getAssetsFromFolderWithMetadata } from "@/utils/getAssetsFromFolder";

const SCROLL_SPEED = 1.3; // pixels per frame

export const BrandSlider = () => {
  // Process brands: extract filename and sort
  const brands = useMemo(() => {
    const brandImages = getAssetsFromFolderWithMetadata('brands');
    return brandImages
      .map((item) => {
        // Remove extension from filename
        const fileName = item.filename.replace(/\.(png|jpg|jpeg|webp|svg)$/i, "") || "brand";
        return {
          name: fileName,
          logo: item.image,
        };
      })
      .sort((a, b) => {
        // Sort: named brands first (hero, yamaha, etc.), then numbered (14, 17, etc.)
        const aIsNumber = /^\d+$/.test(a.name);
        const bIsNumber = /^\d+$/.test(b.name);
        if (aIsNumber && !bIsNumber) return 1;
        if (!aIsNumber && bIsNumber) return -1;
        if (aIsNumber && bIsNumber) return parseInt(a.name) - parseInt(b.name);
        return a.name.localeCompare(b.name);
      });
  }, []);

  // Process scooters: extract filename and sort
  const scooters = useMemo(() => {
    const scooterImages = getAssetsFromFolderWithMetadata('scooters');
    return scooterImages
      .map((item) => {
        // Remove extension from filename
        const fileName = item.filename.replace(/\.(png|jpg|jpeg|webp|svg)$/i, "") || "scooter";
        return {
          name: fileName,
          image: item.image,
        };
      })
      .sort((a, b) => {
        // Sort: numbered first (001, 006, etc.), then named (scooter2, etc.)
        const aIsNumber = /^\d+$/.test(a.name);
        const bIsNumber = /^\d+$/.test(b.name);
        if (aIsNumber && !bIsNumber) return -1;
        if (!aIsNumber && bIsNumber) return 1;
        if (aIsNumber && bIsNumber) return parseInt(a.name) - parseInt(b.name);
        return a.name.localeCompare(b.name);
      });
  }, []);

  const allBrands = [...brands, ...brands];
  const allScooters = [...scooters, ...scooters];

  const brandsTrackRef = useRef<HTMLDivElement>(null);
  const brandsAnimationFrame = useRef<number>();
  const brandsScrollPosition = useRef(0);
  const [brandsPaused, setBrandsPaused] = useState(false);

  useEffect(() => {
    const track = brandsTrackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth / 2;

    const loop = () => {
      if (!brandsPaused) {
        brandsScrollPosition.current += SCROLL_SPEED;
        if (brandsScrollPosition.current >= maxScroll) {
          brandsScrollPosition.current = 0;
        }
        track.scrollLeft = brandsScrollPosition.current;
      }
      brandsAnimationFrame.current = requestAnimationFrame(loop);
    };

    brandsAnimationFrame.current = requestAnimationFrame(loop);

    return () => {
      if (brandsAnimationFrame.current) cancelAnimationFrame(brandsAnimationFrame.current);
    };
  }, [brandsPaused]);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-10">
          <div>
            <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-4">
              🛠️ Our Specialists Service Every Scooter
        </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-8">
              Reliable Service You Can Feel on the Road
            </p>
            <div className="relative overflow-hidden py-4">
              <div 
                className="flex gap-8 animate-slide-reverse hover:[animation-play-state:paused]"
                style={{ width: 'max-content' }}
              >
                {allScooters.map((scooter, index) => (
              <div
                    key={`${scooter.name}-${index}`}
                    className="flex-shrink-0 w-48 h-32 flex items-center justify-center rounded-2xl border border-transparent bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#3b82f6] hover:shadow-[0_12px_28px_rgba(59,130,246,0.16)]"
                    style={{ minWidth: '192px', flexShrink: 0 }}
                  >
                    <img
                      src={scooter.image}
                      alt={`${scooter.name} scooter service and repair in Hyderabad`}
                      className="max-w-full max-h-full object-contain"
                      loading="eager"
                      onError={(e) => {
                        console.error('Failed to load scooter image:', scooter.name, 'index:', index);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-[30px]">
               Trusted Service for All Two-Wheeler Brands ✨
            </h2>
            <div className="relative w-full">
              <div 
                ref={brandsTrackRef}
                onMouseEnter={() => setBrandsPaused(true)}
                onMouseLeave={() => setBrandsPaused(false)}
                className="relative flex w-full gap-8 overflow-x-hidden overflow-y-visible px-0 py-2"
              >
                {allBrands.map((brand, index) => {
                  const isBrand18 = brand.name === "18";
                  return (
                    <div
                      key={`${brand.name}-${index}`}
                      className="flex-shrink-0 flex items-center justify-center rounded-xl border border-transparent bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#3b82f6] hover:shadow-[0_10px_25px_rgba(59,130,246,0.16)]"
                      style={{ 
                        width: '160px', 
                        height: '80px', 
                        flexShrink: 0,
                        boxSizing: 'border-box'
                      }}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} bike service and repair in Hyderabad`}
                  className="max-w-full max-h-full object-contain"
                        style={isBrand18 ? { maxWidth: '100px', maxHeight: '50px' } : {}}
                        loading="eager"
                />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
