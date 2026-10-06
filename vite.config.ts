import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/coral/",
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: true,
  },
});
