import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The production build is written to `docs/`. The GitHub Actions workflow
// (.github/workflows/deploy.yml) builds it and publishes it to GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});
