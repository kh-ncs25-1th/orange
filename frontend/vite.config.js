import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 알리아스(alias)
  resolve:{
    alias:{
      "@shared": path.resolve(__dirname,"src/shared"),
      "@widgets": path.resolve(__dirname,"src/widgets"),
      "@entities": path.resolve(__dirname,"src/entities"),
      "@pages": path.resolve(__dirname,"src/pages"),
    }
  }
})
