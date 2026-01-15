import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      'abasic-unrefractively-ressie.ngrok-free.dev',
      // You can add other specific domains or patterns:
      '.ngrok-free.dev' // This allows ALL ngrok-free.dev subdomains
    ]
  }
});