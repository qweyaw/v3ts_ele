import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// antd
// import Components from 'unplugin-vue-components/vite'
// import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// electron
import * as path from "path";
import electron from "vite-plugin-electron";
import electronRenderer from "vite-plugin-electron/renderer";
import polyfillExports from "vite-plugin-electron/polyfill-exports";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": resolve("src"),
  },
  plugins: [
    vue(),
    // Components({
    // resolvers: [AntDesignVueResolver]
    // })
    // electron({
    //   main: {
    //     entry: "./electron/main.ts"
    //   },
    //   preload: {
    //     input: path.join(__dirname, "./electron/preload.ts")
    //   }
    // }),
    // electronRenderer(),
    // polyfillExports()
  ],
  build: {
    emptyOutDir: false,
  },
});
