import { useMemo, useRef, useEffect } from "react";
import { getAssetsFromFolderWithMetadata } from "@/utils/getAssetsFromFolder";

export const Gallery = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const normalImages = useMemo(() => {
    // Fetch all gallery images and filter for normal subfolder
    const allGalleryImages = getAssetsFromFolderWithMetadata('gallery');
    const normal = allGalleryImages
      .filter(item => item.path.includes('/gallery/normal/'))
      .map(item => item.image);
    // Remove duplicates and return unique images only
    return Array.from(new Set(normal));
  }, []);

  const reverseImages = useMemo(() => {
    // Fetch all gallery images and filter for reverse subfolder
    const allGalleryImages = getAssetsFromFolderWithMetadata('gallery');
    const reverse = allGalleryImages
      .filter(item => item.path.includes('/gallery/reverse/'))
      .map(item => item.image);
    // Remove duplicates and return unique images only
    return Array.from(new Set(reverse));
  }, []);

  // Duplicate images in DOM for seamless infinite scroll (not in folder, just for rendering)
  // This ensures last image connects seamlessly to first image
  const row1Images = useMemo(() => [...normalImages, ...normalImages], [normalImages]);
  const row2Images = useMemo(() => [...reverseImages, ...reverseImages], [reverseImages]);

  const getAlignmentRow1 = (index: number) => {
    return index % 2 === 0 ? 'align-top' : 'align-bottom';
  };

  const getAlignmentRow2 = (index: number) => {
    return index % 2 === 0 ? 'align-bottom' : 'align-top';
  };

  // Scroll-based horizontal floating effect with seamless looping
  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!row1 || !row2) return;

    // Get the gallery section's position to calculate relative scroll
    const gallerySection = row1.closest('section');
    if (!gallerySection) return;

    // Get container widths for loop calculation
    const row1Container = row1.querySelector('.grid-container') as HTMLElement;
    const row2Container = row2.querySelector('.grid-container') as HTMLElement;
    
    let row1HalfWidth = 0;
    let row2HalfWidth = 0;

    // Calculate half width for seamless looping (since we duplicate images in DOM)
    const calculateWidths = () => {
      if (row1Container && row1Container.scrollWidth > 0) {
        row1HalfWidth = row1Container.scrollWidth / 2;
      }
      if (row2Container && row2Container.scrollWidth > 0) {
        row2HalfWidth = row2Container.scrollWidth / 2;
      }
    };

    // Calculate widths after images load
    const initWidths = () => {
      calculateWidths();
      setTimeout(calculateWidths, 100);
      setTimeout(calculateWidths, 500);
    };
    initWidths();
    window.addEventListener('resize', calculateWidths);
    
    // Recalculate when images load
    const allImages = document.querySelectorAll('.row-1 img, .row-2 img') as NodeListOf<HTMLImageElement>;
    allImages.forEach(img => {
      if (!img.complete) {
        img.addEventListener('load', calculateWidths, { once: true });
      }
    });

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const galleryRect = gallerySection.getBoundingClientRect();
      const galleryTop = galleryRect.top + scrollY;
      
      const relativeScroll = Math.max(0, scrollY - galleryTop);

      // Row 1: moves left, loops seamlessly
      // When scroll reaches half width, it seamlessly continues from the duplicate set
      if (row1HalfWidth > 0) {
        row1.style.transform = `translateX(-${(relativeScroll * 0.10) % row1HalfWidth}px)`;
      } else {
        row1.style.transform = `translateX(-${relativeScroll * 0.10}px)`;
      }

      // Row 2: moves right, loops seamlessly
      // Start from negative half width so duplicate images are visible on left
      // When scroll reaches end, it seamlessly continues from the duplicate set
      if (row2HalfWidth > 0) {
        const scrollPos = relativeScroll * 0.10;
        const offset = scrollPos % row2HalfWidth;
        // Start from -halfWidth so when offset is 0, the duplicate set is visible on left
        // As we scroll, offset increases and first set comes into view from right
        // When offset wraps back to 0, it seamlessly continues from duplicate set
        row2.style.transform = `translateX(${offset - row2HalfWidth}px)`;
      } else {
        row2.style.transform = `translateX(${relativeScroll * 0.10}px)`;
      }
    };
    
    // Initialize rows at 0
    row1.style.transform = 'translateX(0)';
    row2.style.transform = 'translateX(0)';

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    // Recalculate width after layout
    requestAnimationFrame(() => {
      calculateWidths();
      handleScroll();
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateWidths);
    };
  }, [row1Images, row2Images]);

  return (
    <section id="gallery" className="pt-16 md:pt-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Workshop Moments & Real Repairs
          </h2>
          {/* Orange accent line */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Real bikes. Real fixes. Real passion.
          </p>
        </div>
      </div>

      {/* Mechanic & Engine Images Gallery - Scroll-Based Floating with Staggered Pattern */}
      <section className="w-full overflow-x-hidden overflow-y-visible pt-2 pb-4 sm:pt-4 sm:pb-8 md:pt-6 md:pb-12 lg:pb-16" style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}>
        {/* Row 1 - Moves Left on Scroll */}
        <div ref={row1Ref} className="row row-1 mb-4 sm:mb-6 md:mb-8 lg:mb-16">
          <div className="grid-container">
            {row1Images.map((image, index) => {
              const alignClass = getAlignmentRow1(index);
              const isUpImage = index % 2 === 0;
              // Row 1: Upward images (0,2,4,6) = 180×260, Normal images (1,3,5,7) = 180×180
              // Heights & widths:
              // - Mobile (all widths < md): 180×260 (up) and 180×180 (normal)
              // - Desktop (xl and above): 400×550 (up) and 400×400 (normal)
              // - Tablet / mid sizes: smooth step between these values
              const imageHeightClass = isUpImage 
                ? "h-[260px] md:h-[360px] lg:h-[460px] xl:h-[550px]"  // up images
                : "h-[180px] md:h-[260px] lg:h-[330px] xl:h-[400px]"; // normal images
              const imageWidthClass = "w-[180px] md:w-[260px] lg:w-[330px] xl:w-[400px]";
              
              return (
                <div key={`row1-img-${index}`} className={`grid-column ${alignClass}`}>
                  <div className={`${imageWidthClass} ${imageHeightClass} flex-shrink-0`}>
                    <img 
                      src={image} 
                      alt="Bike mechanic workshop in Karwan Hyderabad"
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
              // Row 2: Normal images (0,2,4,6) = 180×180, Downward images (1,3,5,7) = 180×260
              const isNormalImage = index % 2 === 0;
              // Heights & widths:
              // - Mobile (all widths < md): 180×180 (normal) and 180×260 (down)
              // - Desktop (xl and above): 400×400 (normal) and 400×550 (down)
              // - Tablet / mid sizes: smooth step between these values
              const imageHeightClass = isNormalImage 
                ? "h-[180px] md:h-[260px] lg:h-[330px] xl:h-[400px]"  // normal images
                : "h-[260px] md:h-[360px] lg:h-[460px] xl:h-[550px]"; // down images
              const imageWidthClass = "w-[180px] md:w-[260px] lg:w-[330px] xl:w-[400px]";
              
              return (
                <div key={`row2-img-${index}`} className={`grid-column ${alignClass}`}>
                  <div className={`${imageWidthClass} ${imageHeightClass} flex-shrink-0`}>
                    <img 
                      src={image} 
                      alt="Two-wheeler service bay Hyderabad"
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
