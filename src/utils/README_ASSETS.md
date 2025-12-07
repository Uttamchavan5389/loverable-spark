# Assets Management Guide

## How Assets Work in AWS Deployment

All assets in `/src/assets/` and subfolders are automatically included in the production build when you run `npm run build`.

### How It Works

1. **Build Time**: Vite scans all files in `src/assets/` during build
2. **Automatic Inclusion**: Any file imported (statically or via `import.meta.glob`) is included in the `dist/` folder
3. **AWS Deployment**: Deploy the `dist/` folder to AWS - all assets will be available

### Using Assets in Components

#### Option 1: Use the Generic Utility (Recommended for New Folders)

```typescript
import { getAssetsFromFolder } from "@/utils/getAssetsFromFolder";

// Get all images from any folder
const heroImages = getAssetsFromFolder('hero');
const aboutImages = getAssetsFromFolder('about');
const galleryImages = getAssetsFromFolder('gallery/normal');
```

#### Option 2: Direct import.meta.glob (For Specific Use Cases)

```typescript
const modules = import.meta.glob<{ default: string }>(
  "@/assets/your-folder/**/*.{jpg,png,jpeg,webp}",
  { eager: true }
);
const images = Object.values(modules).map((mod) => mod.default);
```

### Adding New Folders

1. **Create the folder**: `/src/assets/about/` (or any name)
2. **Add images**: Place images in the folder
3. **Use in component**:
   ```typescript
   import { getAssetsFromFolder } from "@/utils/getAssetsFromFolder";
   
   const aboutImages = getAssetsFromFolder('about');
   ```
4. **Build**: Run `npm run build` - all images will be included automatically
5. **Deploy**: Deploy `dist/` folder to AWS

### Current Asset Folders

- `assets/hero/` - Hero section slider images
- `assets/gallery/` - Gallery images (normal/ and reverse/ subfolders)
- `assets/brands/` - Brand logos
- `assets/scooters/` - Scooter images
- `assets/services/` - Service images

### Supported Image Formats

- `.jpg` / `.jpeg`
- `.png`
- `.webp`
- `.svg`
- `.gif`
- `.bmp`
- `.ico`
- `.tiff`

### Important Notes

- **Build Time**: Images are discovered during `npm run build`
- **To Update**: Add/remove images → rebuild → redeploy
- **Subfolders**: All subfolders are automatically included
- **No Manual Imports**: Use `getAssetsFromFolder()` or `import.meta.glob` - no need to manually import each image

### Removing Images

**What happens when you remove an image?**

1. **Remove the image file** from the folder (e.g., delete `hero-slide-3.jpg`)
2. **Rebuild the project**: `npm run build`
3. **Automatic exclusion**: The removed image will NOT be included in the build
4. **Component updates**: Your component will automatically show fewer images - no code changes needed!

**Example:**
```bash
# Before: assets/hero/ has 5 images
hero-mechanic.jpg
hero-slide-2.jpg
hero-slide-3.jpg  ← You delete this
hero-slide-4.jpg
hero-slide-5.jpg

# After rebuild: Only 4 images will be in the slider
# The component automatically adapts - no code changes needed!
```

**Important:**
- ✅ **Development**: Restart dev server (`npm run dev`) to see changes
- ✅ **Production**: Rebuild (`npm run build`) to exclude removed images
- ✅ **No Code Changes**: The component automatically shows only existing images
- ✅ **No Errors**: If folder is empty, fallback images are used (if configured)

