import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': '/src',
      // This creates an alias where '~' points to the src directory
      // This matches the alias used in the codebase (e.g., in switch.tsx: "import { cn } from "~/lib/utils"")
    },
  },
});
