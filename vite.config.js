import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://esteban941017.github.io/Dogs/',
  plugins: [react(), svgr()],
});
