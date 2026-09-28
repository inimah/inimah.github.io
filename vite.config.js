import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The production build is written to `docs/`, which GitHub Pages serves
// directly (Settings → Pages → Deploy from a branch → /docs).
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});
