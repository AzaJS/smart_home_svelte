import { defineConfig } from 'vite'
import path from "path"
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@App": path.resolve(__dirname, "src/app"),
    }
  },

  plugins: [svelte()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@use \"src/variables.scss\" as *;"
      }
    }
  }
})