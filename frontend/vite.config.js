import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 알리아스(alias)
  resolve:{
    alias:{
      "@pages": path.resolve(__dirname,"src/pages"),
      "@widgets": path.resolve(__dirname,"src/widgets"),
      "@features": path.resolve(__dirname,"src/features"),
      "@entities": path.resolve(__dirname,"src/entities"),
      "@shared": path.resolve(__dirname,"src/shared"),
    }
  }
})
