import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import * as path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    eslint({
      cache: false
    }),
    vueJsx(),
    autoImport({
      resolvers: [
        ElementPlusResolver()
      ]
    }),
    components({
      resolvers: [
        ElementPlusResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
