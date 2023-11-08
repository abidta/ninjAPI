import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path,{ dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  }
})
