/**
 * EXAMPLE: How to use assets from a new folder (e.g., "about")
 * 
 * This is just an example file showing how to use the getAssetsFromFolder utility.
 * You can delete this file or use it as a reference.
 */

import { useMemo } from "react";
import { getAssetsFromFolder, getAssetsFromFolderWithMetadata } from "@/utils/getAssetsFromFolder";

// Example 1: Simple usage - get all images from about folder
export const AboutImagesExample = () => {
  const aboutImages = useMemo(() => {
    // This will automatically fetch all images from assets/about/ folder
    // Works with subfolders too: getAssetsFromFolder('about/team')
    return getAssetsFromFolder('about');
  }, []);

  if (aboutImages.length === 0) {
    return <div>No images found in assets/about/ folder</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {aboutImages.map((image, index) => (
        <img 
          key={index} 
          src={image} 
          alt={`About image ${index + 1}`}
          className="w-full h-auto rounded-lg"
        />
      ))}
    </div>
  );
};

// Example 2: Get images with metadata (filename, path, etc.)
export const AboutImagesWithMetadataExample = () => {
  const aboutImages = useMemo(() => {
    // This returns images with additional metadata
    return getAssetsFromFolderWithMetadata('about');
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {aboutImages.map((item, index) => (
        <div key={index} className="border rounded-lg p-4">
          <img 
            src={item.image} 
            alt={item.filename}
            className="w-full h-auto rounded-lg mb-2"
          />
          <p className="text-sm text-gray-600">{item.filename}</p>
          <p className="text-xs text-gray-400">{item.path}</p>
        </div>
      ))}
    </div>
  );
};

// Example 3: Custom extensions
export const AboutImagesCustomExtensions = () => {
  const aboutImages = useMemo(() => {
    // Only get PNG and SVG files
    return getAssetsFromFolder('about', ['png', 'svg']);
  }, []);

  return (
    <div>
      {aboutImages.map((image, index) => (
        <img key={index} src={image} alt={`About ${index + 1}`} />
      ))}
    </div>
  );
};

