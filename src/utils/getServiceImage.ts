/**
 * Automatically fetches service images from assets/services folder
 * Matches image filename with service title (case-insensitive, handles multiple extensions)
 */

// Dynamically import all images from services folder
const serviceImages = import.meta.glob('/src/assets/services/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  as: 'url',
}) as Record<string, string>;

/**
 * Get image URL for a service by matching the service title with image filename
 * @param serviceTitle - The title of the service (e.g., "General Service", "Electrical Repairs")
 * @returns Image URL or null if not found
 */
export const getServiceImage = (serviceTitle: string): string | null => {
  if (!serviceTitle) return null;

  // Normalize the service title: remove "Bike" prefix, trim, lowercase
  const normalizedTitle = serviceTitle
    .replace(/^Bike\s+/i, '') // Remove "Bike" prefix if present
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' '); // Normalize spaces

  // Try to find matching image
  for (const [path, url] of Object.entries(serviceImages)) {
    // Extract filename from path (e.g., "/src/assets/services/General Service.png" -> "General Service.png")
    const filename = path.split('/').pop() || '';
    
    // Remove extension and normalize
    const filenameWithoutExt = filename
      .replace(/\.(png|jpg|jpeg|webp|svg)$/i, '')
      .toLowerCase()
      .replace(/\s+/g, ' ');

    // Check if normalized title matches normalized filename
    if (filenameWithoutExt === normalizedTitle) {
      return url as string;
    }
  }

  // If no exact match found, return null (fallback to placeholder or default)
  return null;
};

