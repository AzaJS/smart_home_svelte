import { defineConfig } from 'vite'
import path from "path"
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
			"@SVG": path.resolve(__dirname, "public/svg/"),
      "@App": path.resolve(__dirname, "src/app"),
      "@Entities": path.resolve(__dirname, "src/entities"),
      "@Pages": path.resolve(__dirname, "src/pages")
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