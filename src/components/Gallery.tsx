import { useMemo, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import normalPlaceholder1 from "@/assets/gallery/normal/placeholder-1.png";
import normalPlaceholder2 from "@/assets/gallery/normal/placeholder-2.png";
import normalPlaceholder3 from "@/assets/gallery/normal/placeholder-3.png";
import normalPlaceholder4 from "@/assets/gallery/normal/placeholder-4.png";
import normalPlaceholder5 from "@/assets/gallery/normal/placeholder-1.png";
import normalPlaceholder6 from "@/assets/gallery/normal/placeholder-2.png";
import reversePlaceholder1 from "@/assets/gallery/reverse/placeholder-5.png";
import reversePlaceholder2 from "@/assets/gallery/reverse/placeholder-6.png";
import reversePlaceholder3 from "@/assets/gallery/reverse/placeholder-7.png";
import reversePlaceholder4 from "@/assets/gallery/reverse/placeholder-8.png";
import reversePlaceholder5 from "@/assets/gallery/reverse/placeholder-5.png";
import reversePlaceholder6 from "@/assets/gallery/reverse/placeholder-6.png";

export const Gallery = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const normalImages = useMemo(() => {
    const modules = import.meta.glob<{ default: string }>(
      "@/assets/gallery/normal/*.png",
      { eager: true }
    );
    const images = Object.values(modules).map((mod) => mod.default);
    return images.length
      ? images
      : [normalPlaceholder1, normalPlaceholder2, normalPlaceholder3, normalPlaceholder4, normalPlaceholder5, normalPlaceholder6];
  }, []);

  const reverseImages = useMemo(() => {
    const modules = import.meta.glob<{ default: string }>(
      "@/assets/gallery/reverse/*.png",
      { eager: true }
    );
    const images = Object.values(modules).map((mod) => mod.default);
    return images.length
      ? images
      : [reversePlaceholder1, reversePlaceholder2, reversePlaceholder3, reversePlaceholder4, reversePlaceholder5, reversePlaceholder6];
  }, []);

  // Take first 6 images for each row
  const row1Images = normalImages.slice(0, 6);
  const row2Images = reverseImages.slice(0, 6);

  // Helper function to determine if image should be up or down for Row 1
  // Pattern: 1 up, 2 down, 3 up, 4 down, 5 up, 6 down
  // Odd positions (1, 3, 5) are up, even positions (2, 4, 6) are down
  const getAlignmentRow1 = (index: number) => {
    // index is 0-based: 0, 1, 2, 3, 4, 5
    // Position 1 (index 0): up
    // Position 2 (index 1): down
    // Position 3 (index 2): up
    // Position 4 (index 3): down
    // Position 5 (index 4): up
    // Position 6 (index 5): down
    return index % 2 === 0 ? 'align-top' : 'align-bottom';
  };

  // Helper function to determine if image should be up or down for Row 2 (REVERSED)
  // Pattern: 1 down, 2 up, 3 down, 4 up, 5 down, 6 up (opposite of Row 1)
  const getAlignmentRow2 = (index: number) => {
    // index is 0-based: 0, 1, 2, 3, 4, 5
    // Position 1 (index 0): down (reversed)
    // Position 2 (index 1): up (reversed)
    // Position 3 (index 2): down (reversed)
    // Position 4 (index 3): up (reversed)
    // Position 5 (index 4): down (reversed)
    // Position 6 (index 5): up (reversed)
    return index % 2 === 0 ? 'align-bottom' : 'align-top';
  };

  // Scroll-based horizontal floating effect
  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!row1 || !row2) return;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Row 1 moves left (negative direction)
      row1.style.transform = `translateX(-${scrollY * 0.10}px)`;

      // Row 2 moves right (positive direction)
      row2.style.transform = `translateX(${scrollY * 0.10}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set position on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="pt-16 md:pt-20 bg-background">
      <div className="container mx-auto px-4 text-center mb-10">
        <Badge className="mb-3 px-4 py-2 text-sm font-semibold bg-blue-50 text-blue-600 border border-blue-100">
          Gallery
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Workshop Moments & Real Repairs
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
          Real snapshots from our garage floor — hover to pause, tap to admire, and watch how
          every scooter gets the spotlight it deserves.
        </p>
      </div>

      {/* Mechanic & Engine Images Gallery - Scroll-Based Floating with Staggered Pattern */}
      <section className="w-full overflow-hidden pt-2 pb-4 sm:pt-4 sm:pb-8 md:pt-6 md:pb-12 lg:pb-20">
        {/* Row 1 - Moves Left on Scroll */}
        <div ref={row1Ref} className="row row-1 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <div className="grid-container">
            {row1Images.map((image, index) => {
              const alignClass = getAlignmentRow1(index);
              // Images 1, 3, 5 (indices 0, 2, 4) are up - set height to responsive 600px
              // Images 2, 4, 6 (indices 1, 3, 5) are down - keep responsive height
              const isUpImage = index % 2 === 0;
              const imageHeightClass = isUpImage 
                ? "h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]" 
                : "h-[150px] sm:h-[200px] md:h-[280px] lg:h-[350px] xl:h-[448px]";
              const imageWidthClass = isUpImage
                ? "w-[150px] sm:w-[200px] md:w-[280px] lg:w-[350px] xl:w-[448px]"
                : "w-[150px] sm:w-[200px] md:w-[280px] lg:w-[350px] xl:w-[448px]";
              
              return (
                <div key={`row1-img-${index}`} className={`grid-column ${alignClass}`}>
                  <div className={`${imageWidthClass} ${imageHeightClass} flex-shrink-0`}>
                    <img 
                      src={image} 
                      alt={`Gallery row 1 image ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2 - Moves Right on Scroll */}
        <div ref={row2Ref} className="row row-2">
          <div className="grid-container">
            {row2Images.map((image, index) => {
              const alignClass = getAlignmentRow2(index);
              // Images 2, 4, 6 (indices 1, 3, 5) are up - set height to responsive 600px
              // Images 1, 3, 5 (indices 0, 2, 4) are down - keep responsive height
              const isUpImage = index % 2 === 1;
              const imageHeightClass = isUpImage 
                ? "h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]" 
                : "h-[150px] sm:h-[200px] md:h-[280px] lg:h-[350px] xl:h-[448px]";
              const imageWidthClass = isUpImage
                ? "w-[150px] sm:w-[200px] md:w-[280px] lg:w-[350px] xl:w-[448px]"
                : "w-[150px] sm:w-[200px] md:w-[280px] lg:w-[350px] xl:w-[448px]";
              
              return (
                <div key={`row2-img-${index}`} className={`grid-column ${alignClass}`}>
                  <div className={`${imageWidthClass} ${imageHeightClass} flex-shrink-0`}>
                    <img 
                      src={image} 
                      alt={`Gallery row 2 image ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};
