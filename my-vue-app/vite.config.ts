import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// electron
import * as path from 'path'
import electron from 'vite-plugin-electron'
import electronRenderer from 'vite-plugin-electron/renderer'
import polyfillExports from 'vite-plugin-electron/polyfill-exports'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      main: {
        entry: "./electron/main.js"
      },
      preload: {
        input: path.join(__dirname, "./electron/preload.js")
      }
    }),
    electronRenderer(),
    polyfillExports()
  ],
  build: {
    emptyOutDir: false
  }
})
