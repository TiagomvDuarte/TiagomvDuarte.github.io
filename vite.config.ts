import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { shadcnPlugin } from '@replit/vite-plugin-shadcn-theme-json';
import path from 'path';

export default defineConfig({
  base: '/',
  plugins: [react(), shadcnPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  build: {
    outDir: 'dist/public',
  },
});