import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "./client/src/client/src/client",
  resolve: {
    alias: {
      "@": "/src",
      "@shared": "../../../../shared",
      "@assets": "../../../../attached_assets",
    },
  },
  build: {
    outDir: "../../../../dist/public",
    emptyOutDir: true,
  },
});
