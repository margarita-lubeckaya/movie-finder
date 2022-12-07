import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      "types": path.resolve(__dirname, './src/types'),
      "@services": path.resolve(__dirname, './src/services'),
      "@components": path.resolve(__dirname, './src/components'),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@theme": path.resolve(__dirname, "./src/Theme"),
    },
  },
})
