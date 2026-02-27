import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path' // หากขึ้นสีแดงที่ path ให้รัน npm i -D @types/node

// vite.config.ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@services": `${path.resolve(__dirname, "./src/services/")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
      "@types": `${path.resolve(__dirname, "./src/types/")}`,
    },
  },
})