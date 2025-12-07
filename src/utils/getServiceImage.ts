/**
 * Automatically fetches service images from assets/services folder
 * Matches image filename with service title (case-insensitive, handles multiple extensions)
 */

// Dynamically import all images from services folder (both root and subfolders)
const serviceImagesSubfolders = import.meta.glob<{ default: string }>(
  '@/assets/services/**/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

const serviceImagesRoot = import.meta.glob<{ default: string }>(
  '@/assets/services/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

// Combine both
const serviceImages = { ...serviceImagesSubfolders, ...serviceImagesRoot };

/**
 * Get image URL for a service by matching the service title with image filename
 * @param serviceTitle - The title of the service (e.g., "General Service", "Electrical Repairs")
 * @returns Image URL or null if not found
 */
export const getServiceImage = (serviceTitle: string): string | null => {
  if (!serviceTitle) return null;

  // Normalize the service title: trim, lowercase, remove special characters in parentheses
  const normalizedTitle = serviceTitle
    .trim()
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, '') // Remove text in parentheses like "(Tie Up)"
    .replace(/\s+/g, ' ') // Normalize spaces
    .trim();

  // Also create a version without "Bike" prefix for matching
  const normalizedTitleWithoutBike = normalizedTitle
    .replace(/^bike\s+/, ''); // Remove "Bike" prefix if present

  // Create versions with/without plural 's' for matching
  const normalizedTitleSingular = normalizedTitle.replace(/s$/, '');
  const normalizedTitlePlural = normalizedTitle + 's';
  const normalizedTitleWithoutBikeSingular = normalizedTitleWithoutBike.replace(/s$/, '');
  const normalizedTitleWithoutBikePlural = normalizedTitleWithoutBike + 's';

  // Try to find matching image
  for (const [path, mod] of Object.entries(serviceImages)) {
    // Extract filename from path (e.g., "@/assets/services/General Service.jpg" -> "General Service.jpg")
    const filename = path.split('/').pop() || '';
    
    // Remove extension and normalize
    const filenameWithoutExt = filename
      .replace(/\.(png|jpg|jpeg|webp|svg)$/i, '')
      .toLowerCase()
      .replace(/\s+/g, ' ');

    // Also create a version without "Bike" prefix
    const filenameWithoutBike = filenameWithoutExt.replace(/^bike\s+/, '');

    // Create versions with/without plural 's'
    const filenameSingular = filenameWithoutExt.replace(/s$/, '');
    const filenamePlural = filenameWithoutExt + 's';
    const filenameWithoutBikeSingular = filenameWithoutBike.replace(/s$/, '');
    const filenameWithoutBikePlural = filenameWithoutBike + 's';

    // Check if normalized title matches normalized filename
    // Try multiple matching strategies:
    // 1. Exact match (with or without "Bike")
    // 2. Match without "Bike" prefix on both sides
    // 3. Match with plural/singular variations
    // 4. Partial match (check if one contains the other as a word)
    if (
      filenameWithoutExt === normalizedTitle ||
      filenameWithoutExt === normalizedTitleWithoutBike ||
      filenameWithoutBike === normalizedTitle ||
      filenameWithoutBike === normalizedTitleWithoutBike ||
      // Plural/singular matching
      filenameWithoutExt === normalizedTitleSingular ||
      filenameWithoutExt === normalizedTitlePlural ||
      filenameSingular === normalizedTitle ||
      filenamePlural === normalizedTitle ||
      filenameWithoutExt === normalizedTitleWithoutBikeSingular ||
      filenameWithoutExt === normalizedTitleWithoutBikePlural ||
      filenameWithoutBikeSingular === normalizedTitleWithoutBike ||
      filenameWithoutBikePlural === normalizedTitleWithoutBike ||
      // Partial matching - check if one contains the other as a complete word
      (normalizedTitleWithoutBike && filenameWithoutBike.includes(normalizedTitleWithoutBike)) ||
      (normalizedTitleWithoutBike && normalizedTitleWithoutBike.includes(filenameWithoutBike))
    ) {
      return mod.default;
    }
  }

  // If no exact match found, return null (fallback to placeholder or default)
  return null;
};

