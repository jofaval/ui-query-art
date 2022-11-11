import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const base = process.env.NODE_ENV === "production" ? "/ui-query-art/" : "/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
