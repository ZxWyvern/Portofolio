
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: process.env.VERCEL ? '/' : '/Portofolio/',
  plugins: [react()],
  publicDir: false,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
    build: {
      target: 'esnext',
      outDir: 'public',
    },
  server: {
    port: 3000,
    open: true,
  },

});
