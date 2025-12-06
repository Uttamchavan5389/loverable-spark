/**
 * Generic utility to automatically fetch all images from any folder in assets
 * Works at build time - all images will be included in the production build
 * 
 * Usage:
 *   const images = getAssetsFromFolder('hero'); // Gets all images from assets/hero/
 *   const images = getAssetsFromFolder('about'); // Gets all images from assets/about/
 *   const images = getAssetsFromFolder('gallery/normal'); // Gets from assets/gallery/normal/
 * 
 * @param folderPath - Path relative to src/assets (e.g., 'hero', 'about', 'gallery/normal')
 * @param extensions - Array of file extensions to include (default: ['jpg', 'jpeg', 'png', 'webp'])
 * @returns Array of image URLs
 */
export const getAssetsFromFolder = (
  folderPath: string,
  extensions: string[] = ['jpg', 'jpeg', 'png', 'webp']
): string[] => {
  // Build the glob pattern
  const extPattern = extensions.join(',');
  const globPattern = `@/assets/${folderPath}/**/*.{${extPattern}}`;
  
  // Dynamically import all images from the folder
  const modules = import.meta.glob<{ default: string }>(
    globPattern,
    { eager: true }
  );
  
  // Extract image URLs
  const images = Object.values(modules).map((mod) => mod.default);
  
  return images;
};

/**
 * Get all images from a folder with metadata (filename, path, etc.)
 * @param folderPath - Path relative to src/assets
 * @param extensions - Array of file extensions to include
 * @returns Array of objects with image URL and metadata
 */
export const getAssetsFromFolderWithMetadata = (
  folderPath: string,
  extensions: string[] = ['jpg', 'jpeg', 'png', 'webp']
): Array<{ image: string; filename: string; path: string }> => {
  const extPattern = extensions.join(',');
  const globPattern = `@/assets/${folderPath}/**/*.{${extPattern}}`;
  
  const modules = import.meta.glob<{ default: string }>(
    globPattern,
    { eager: true }
  );
  
  return Object.entries(modules).map(([path, mod]) => {
    const filename = path.split('/').pop() || '';
    return {
      image: mod.default,
      filename,
      path,
    };
  });
};

