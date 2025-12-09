import { useMemo, useRef, useEffect } from "react";
import { getAssetsFromFolderWithMetadata } from "@/utils/getAssetsFromFolder";

export const Gallery = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const gallerySectionRef = useRef<HTMLElement | null>(null);
  
  // Touch scroll state for mobile/tablet - shared between effects
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const isHorizontalScrolling = useRef<boolean>(false);
  const lastTouchX = useRef<number>(0);
  const touchOffset = useRef<number>(0); // Additional offset from touch scrolling - shared
  const isTouching = useRef<boolean>(false); // Track if currently touching

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

  // Touch-based horizontal scrolling for mobile/tablet only
  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!row1 || !row2) return;

    const gallerySection = row1.closest('section');
    if (!gallerySection) return;
    gallerySectionRef.current = gallerySection;

    // Check if device is mobile/tablet (touch device) - only enable for touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isMobileOrTablet = window.innerWidth < 1024; // Only for mobile and tablet (< 1024px)
    
    if (!isTouchDevice || !isMobileOrTablet) return; // Only enable for touch devices on mobile/tablet

    const row1Container = row1.querySelector('.grid-container') as HTMLElement;
    const row2Container = row2.querySelector('.grid-container') as HTMLElement;
    
    let row1HalfWidth = 0;
    let row2HalfWidth = 0;
    let currentRow1Offset = 0; // Current position of row 1
    let currentRow2Offset = 0; // Current position of row 2

    const calculateWidths = () => {
      if (row1Container && row1Container.scrollWidth > 0) {
        row1HalfWidth = row1Container.scrollWidth / 2;
      }
      if (row2Container && row2Container.scrollWidth > 0) {
        row2HalfWidth = row2Container.scrollWidth / 2;
      }
    };

    calculateWidths();
    setTimeout(calculateWidths, 100);
    setTimeout(calculateWidths, 500);
    window.addEventListener('resize', calculateWidths);

    // Get current position from transform
    const getCurrentOffset = (element: HTMLElement, halfWidth: number, isRow2: boolean = false): number => {
      const transform = window.getComputedStyle(element).transform;
      if (transform && transform !== 'none') {
        const matrix = transform.match(/matrix\(([^)]+)\)/);
        if (matrix) {
          const translateX = parseFloat(matrix[1].split(',')[4]) || 0;
          if (halfWidth > 0) {
            if (isRow2) {
              // Row 2: translateX format is (offset - halfWidth), so offset = translateX + halfWidth
              // Convert from negative range (-halfWidth to 0) to positive range (0 to halfWidth)
              const offset = ((translateX + halfWidth) % halfWidth + halfWidth) % halfWidth;
              return offset;
            } else {
              // Row 1: translateX is negative, so we take absolute value
              const absOffset = Math.abs(translateX);
              return absOffset % halfWidth;
            }
          }
          return Math.abs(translateX);
        }
      }
      return 0;
    };

    const handleTouchStart = (e: TouchEvent) => {
      const galleryRect = gallerySection.getBoundingClientRect();
      const touchY = e.touches[0].clientY;
      const touchX = e.touches[0].clientX;
      
      // Check if touch is within gallery section
      const isInGallery = touchY >= galleryRect.top && touchY <= galleryRect.bottom &&
                          touchX >= galleryRect.left && touchX <= galleryRect.right;
      
      if (isInGallery) {
        touchStartX.current = touchX;
        touchStartY.current = touchY;
        lastTouchX.current = touchX;
        isHorizontalScrolling.current = false;
        isTouching.current = true;
        touchOffset.current = 0; // Reset touch offset for this touch session
        
        // Get current position from transform to maintain seamless continuity
        currentRow1Offset = getCurrentOffset(row1, row1HalfWidth, false);
        currentRow2Offset = getCurrentOffset(row2, row2HalfWidth, true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const galleryRect = gallerySection.getBoundingClientRect();
      const touchY = e.touches[0].clientY;
      const touchX = e.touches[0].clientX;
      
      // Check if touch is within gallery section
      const isInGallery = touchY >= galleryRect.top && touchY <= galleryRect.bottom &&
                          touchX >= galleryRect.left && touchX <= galleryRect.right;
      
      if (!isInGallery) {
        isHorizontalScrolling.current = false;
        return;
      }

      const currentX = touchX;
      const currentY = touchY;
      const deltaX = currentX - lastTouchX.current;
      const deltaY = currentY - touchStartY.current;

      // Determine if user is scrolling horizontally or vertically
      if (!isHorizontalScrolling.current) {
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);
        // If horizontal movement is greater than vertical, start horizontal scrolling
        if (absDeltaX > absDeltaY && absDeltaX > 8) {
          isHorizontalScrolling.current = true;
        } else if (absDeltaY > absDeltaX && absDeltaY > 8) {
          // Vertical scrolling detected, don't interfere
          isHorizontalScrolling.current = false;
          return;
        }
      }

      // If horizontal scrolling, prevent vertical scroll and update image positions
      if (isHorizontalScrolling.current) {
        e.preventDefault(); // Prevent vertical scroll
        
        // Calculate new offset based on touch movement
        // Swiping right (positive deltaX) should move images left (negative translateX for row1, positive for row2)
        const touchDelta = -deltaX; // Negative because swiping right moves content left
        
        // Accumulate touch offset smoothly
        touchOffset.current += touchDelta;
        
        // Row 1: moves left (negative translateX)
        let newRow1Offset = currentRow1Offset + touchOffset.current;
        if (row1HalfWidth > 0) {
          // Handle seamless looping - keep in 0 to halfWidth range
          newRow1Offset = ((newRow1Offset % row1HalfWidth) + row1HalfWidth) % row1HalfWidth;
          row1.style.transform = `translateX(-${newRow1Offset}px)`;
        } else {
          row1.style.transform = `translateX(-${newRow1Offset}px)`;
        }

        // Row 2: moves right (positive translateX, but reversed direction)
        let newRow2Offset = currentRow2Offset - touchOffset.current; // Reversed for opposite direction
        if (row2HalfWidth > 0) {
          // Handle seamless looping - keep in 0 to halfWidth range, then offset by -halfWidth
          newRow2Offset = ((newRow2Offset % row2HalfWidth) + row2HalfWidth) % row2HalfWidth;
          row2.style.transform = `translateX(${newRow2Offset - row2HalfWidth}px)`;
        } else {
          row2.style.transform = `translateX(${newRow2Offset}px)`;
        }
      }

      lastTouchX.current = currentX;
    };

    const handleTouchEnd = () => {
      if (isHorizontalScrolling.current) {
        // Get final positions from current transform to maintain seamless continuity
        const row1Transform = window.getComputedStyle(row1).transform;
        const row2Transform = window.getComputedStyle(row2).transform;
        
        // Extract final positions
        if (row1Transform && row1Transform !== 'none') {
          const matrix = row1Transform.match(/matrix\(([^)]+)\)/);
          if (matrix) {
            const finalOffset = Math.abs(parseFloat(matrix[1].split(',')[4]) || 0);
            if (row1HalfWidth > 0) {
              currentRow1Offset = finalOffset % row1HalfWidth;
            } else {
              currentRow1Offset = finalOffset;
            }
            // Update touchOffset to maintain position for scroll handler
            touchOffset.current = currentRow1Offset;
          }
        }
        
        if (row2Transform && row2Transform !== 'none') {
          const matrix = row2Transform.match(/matrix\(([^)]+)\)/);
          if (matrix) {
            const translateX = parseFloat(matrix[1].split(',')[4]) || 0;
            if (row2HalfWidth > 0) {
              // Row 2: translateX format is (offset - halfWidth)
              // Convert from negative range to positive range (0 to halfWidth)
              const offset = ((translateX + row2HalfWidth) % row2HalfWidth + row2HalfWidth) % row2HalfWidth;
              currentRow2Offset = offset;
            } else {
              currentRow2Offset = Math.abs(translateX);
            }
          }
        }
        
        // Re-enable transitions for smooth scroll-based movement
        row1.style.transition = '';
        row2.style.transition = '';
      }
      
      isHorizontalScrolling.current = false;
      isTouching.current = false;
    };

    // Add touch event listeners to gallery section
    gallerySection.addEventListener('touchstart', handleTouchStart, { passive: true });
    gallerySection.addEventListener('touchmove', handleTouchMove, { passive: false });
    gallerySection.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      gallerySection.removeEventListener('touchstart', handleTouchStart);
      gallerySection.removeEventListener('touchmove', handleTouchMove);
      gallerySection.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', calculateWidths);
    };
  }, [row1Images, row2Images]);

  // Scroll-based horizontal floating effect with seamless looping
  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!row1 || !row2) return;

    // Get the gallery section's position to calculate relative scroll
    const gallerySection = gallerySectionRef.current || row1.closest('section');
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
      // Don't update during active touch scrolling - let touch handler control it
      if (isTouching.current && isHorizontalScrolling.current) {
        return;
      }
      
      const scrollY = window.scrollY || window.pageYOffset;
      const galleryRect = gallerySection.getBoundingClientRect();
      const galleryTop = galleryRect.top + scrollY;
      
      const relativeScroll = Math.max(0, scrollY - galleryTop);

      // Get current positions from transform to continue seamlessly from touch position
      const row1Transform = window.getComputedStyle(row1).transform;
      const row2Transform = window.getComputedStyle(row2).transform;
      
      let baseRow1Offset = 0;
      let baseRow2Offset = 0;
      
      // Extract current positions
      if (row1Transform && row1Transform !== 'none') {
        const matrix = row1Transform.match(/matrix\(([^)]+)\)/);
        if (matrix) {
          baseRow1Offset = Math.abs(parseFloat(matrix[1].split(',')[4]) || 0);
          if (row1HalfWidth > 0) {
            baseRow1Offset = baseRow1Offset % row1HalfWidth;
          }
        }
      }
      
      if (row2Transform && row2Transform !== 'none') {
        const matrix = row2Transform.match(/matrix\(([^)]+)\)/);
        if (matrix) {
          const translateX = parseFloat(matrix[1].split(',')[4]) || 0;
          if (row2HalfWidth > 0) {
            // Row 2: translateX format is (offset - halfWidth)
            // Convert from negative range to positive range (0 to halfWidth)
            baseRow2Offset = ((translateX + row2HalfWidth) % row2HalfWidth + row2HalfWidth) % row2HalfWidth;
          } else {
            baseRow2Offset = Math.abs(translateX);
          }
        }
      }

      // Row 1: moves left, loops seamlessly
      // Continue from current position and add scroll offset
      const row1ScrollOffset = baseRow1Offset + (relativeScroll * 0.10);
      if (row1HalfWidth > 0) {
        const finalOffset = ((row1ScrollOffset % row1HalfWidth) + row1HalfWidth) % row1HalfWidth;
        row1.style.transform = `translateX(-${finalOffset}px)`;
      } else {
        row1.style.transform = `translateX(-${row1ScrollOffset}px)`;
      }

      // Row 2: moves right, loops seamlessly
      // Continue from current position and add scroll offset (same as row1, but transform makes it move right)
      const row2ScrollOffset = baseRow2Offset + (relativeScroll * 0.10);
      if (row2HalfWidth > 0) {
        const offset = ((row2ScrollOffset % row2HalfWidth) + row2HalfWidth) % row2HalfWidth;
        // Start from -halfWidth so when offset is 0, the duplicate set is visible on left
        // As we scroll, offset increases and first set comes into view from right
        // When offset wraps back to 0, it seamlessly continues from duplicate set
        // transform: translateX(offset - halfWidth) makes it move RIGHT as offset increases
        row2.style.transform = `translateX(${offset - row2HalfWidth}px)`;
      } else {
        row2.style.transform = `translateX(${row2ScrollOffset}px)`;
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
                      alt={`Bike mechanic workshop and repair service in Karwan Hyderabad ${index + 1}`}
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
                      alt={`Two-wheeler service bay and bike repair in Karwan Hyderabad ${index + 1}`}
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
