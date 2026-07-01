import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          img: ['src'],
          'v-img': ['src', 'lazy-src'],
        },
      },
    }),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.json', '.vue'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': { target: 'http://localhost:8080', changeOrigin: true },
    },
  },
})
