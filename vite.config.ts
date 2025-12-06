import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Ensure all assets are included in the build
    assetsDir: "assets",
    // Copy all assets from src/assets and subfolders
    rollupOptions: {
      output: {
        // Organize assets by type
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split(".") || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // Increase chunk size warning limit for large images
    chunkSizeWarningLimit: 1000,
    // Ensure all assets are copied to dist folder
    copyPublicDir: true,
  },
  // Ensure all assets in src/assets and subfolders are processed
  // This tells Vite to treat these files as assets (will be included in build)
  assetsInclude: [
    "**/*.jpg", 
    "**/*.jpeg", 
    "**/*.png", 
    "**/*.gif", 
    "**/*.svg", 
    "**/*.webp",
    "**/*.bmp",
    "**/*.ico",
    "**/*.tiff"
  ],
}));
