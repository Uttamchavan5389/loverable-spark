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
  // Vite's import.meta.glob requires string literals, not template strings
  // We need to use a switch statement to return the correct literal pattern
  const extPattern = extensions.join(',');
  
  let subfolderModules: Record<string, { default: string }> = {};
  let rootModules: Record<string, { default: string }> = {};
  
  // Use switch to get literal string patterns for each folder
  switch (folderPath) {
    case 'about':
      subfolderModules = import.meta.glob<{ default: string }>(
        '@/assets/about/**/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      rootModules = import.meta.glob<{ default: string }>(
        '@/assets/about/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      break;
    case 'hero':
      subfolderModules = import.meta.glob<{ default: string }>(
        '@/assets/hero/**/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      rootModules = import.meta.glob<{ default: string }>(
        '@/assets/hero/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      break;
    case 'gallery':
      subfolderModules = import.meta.glob<{ default: string }>(
        '@/assets/gallery/**/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      rootModules = import.meta.glob<{ default: string }>(
        '@/assets/gallery/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      break;
    case 'services':
      subfolderModules = import.meta.glob<{ default: string }>(
        '@/assets/services/**/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      rootModules = import.meta.glob<{ default: string }>(
        '@/assets/services/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      break;
    case 'brands':
      subfolderModules = import.meta.glob<{ default: string }>(
        '@/assets/brands/**/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      rootModules = import.meta.glob<{ default: string }>(
        '@/assets/brands/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      break;
    case 'scooters':
      subfolderModules = import.meta.glob<{ default: string }>(
        '@/assets/scooters/**/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      rootModules = import.meta.glob<{ default: string }>(
        '@/assets/scooters/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      break;
    default:
      console.warn(`Folder "${folderPath}" not supported. Add it to the switch statement.`);
      return [];
  }
  
  // Combine both
  const allModules = { ...subfolderModules, ...rootModules };
  
  // Extract image URLs
  return Object.values(allModules).map((mod) => mod.default);
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
  // Vite's import.meta.glob requires string literals, not template strings
  // Use switch statement to return the correct literal pattern
  let subfolderModules: Record<string, { default: string }> = {};
  let rootModules: Record<string, { default: string }> = {};
  
  // Use switch to get literal string patterns for each folder
  switch (folderPath) {
    case 'about':
      subfolderModules = import.meta.glob<{ default: string }>(
        '@/assets/about/**/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      rootModules = import.meta.glob<{ default: string }>(
        '@/assets/about/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      break;
    case 'hero':
      subfolderModules = import.meta.glob<{ default: string }>(
        '@/assets/hero/**/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      rootModules = import.meta.glob<{ default: string }>(
        '@/assets/hero/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      break;
    case 'gallery':
      subfolderModules = import.meta.glob<{ default: string }>(
        '@/assets/gallery/**/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      rootModules = import.meta.glob<{ default: string }>(
        '@/assets/gallery/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      break;
    case 'services':
      subfolderModules = import.meta.glob<{ default: string }>(
        '@/assets/services/**/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      rootModules = import.meta.glob<{ default: string }>(
        '@/assets/services/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      break;
    case 'brands':
      subfolderModules = import.meta.glob<{ default: string }>(
        '@/assets/brands/**/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      rootModules = import.meta.glob<{ default: string }>(
        '@/assets/brands/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      break;
    case 'scooters':
      subfolderModules = import.meta.glob<{ default: string }>(
        '@/assets/scooters/**/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      rootModules = import.meta.glob<{ default: string }>(
        '@/assets/scooters/*.{jpg,jpeg,png,webp}',
        { eager: true }
      );
      break;
    default:
      console.warn(`Folder "${folderPath}" not supported. Add it to the switch statement.`);
      return [];
  }
  
  // Combine both, avoiding duplicates by using path as key
  const allModules = { ...subfolderModules, ...rootModules };
  
  // Remove duplicates based on path
  const uniqueModules = new Map<string, { default: string }>();
  Object.entries(allModules).forEach(([path, mod]) => {
    uniqueModules.set(path, mod);
  });
  
  return Array.from(uniqueModules.entries()).map(([path, mod]) => {
    const filename = path.split('/').pop() || '';
    return {
      image: mod.default,
      filename,
      path,
    };
  });
};

