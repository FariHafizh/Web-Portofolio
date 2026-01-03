import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use relative paths so the production build works when served from a subfolder
  // like http://127.0.0.1:55000/dist/ (VS Code Live Server)
  base: './',
});
