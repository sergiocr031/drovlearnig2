import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/drovlearnig/",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
