import { fileURLToPath, resolve, URL } from 'node:url'
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite'
//element
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
//vite-plugin-svg-icons
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    Components({
      //element
      resolvers: [ElementPlusResolver()]
      //默认存放位置
      //dts: "src/components.d.ts",
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    }),
    Components({
      //element
      resolvers: [ElementPlusResolver()]
      //默认存放位置
      //dts: "src/components.d.ts",
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
