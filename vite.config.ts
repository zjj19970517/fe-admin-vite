import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    eslint({
      cache: false
    }),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
