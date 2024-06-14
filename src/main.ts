import { createApp } from 'vue'
import App from './App.vue'
import router from './router'// 路由
import ElementPlus from 'element-plus'
import {createPinia} from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'; //数据持久化
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import 'element-plus/dist/index.css'
import './style.css'
import '@/assets/iconfonts/iconfont.css'
import '@/assets/iconfonts/iconfont.js'

const store = createPinia()
store.use(piniaPluginPersistedstate);
const app = createApp(App)

app.use(Antd)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')