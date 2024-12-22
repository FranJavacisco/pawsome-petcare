import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración para manejar rutas relativas correctamente en desarrollo y producción
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/pawsome-petcare/' : '/',
  build: {
    outDir: 'dist', // Carpeta de salida para el build
  },
});
