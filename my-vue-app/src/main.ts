import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './styles/global.scss'
const pinia = createPinia()
createApp(App)
    .use(Antd)
    .use(pinia)
    .use(router)
    .mount('#app')
