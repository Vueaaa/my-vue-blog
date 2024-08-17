import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import '@/assets/styles/index.scss'
import '@/assets/fonts/font.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//svg-icons-register
import 'virtual:svg-icons-register'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
