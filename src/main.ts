import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'// 路由
import Antd from 'ant-design-vue';
import {createPinia} from "pinia"
const app = createApp(App)
app.use(router)
app.use(Antd)
app.use(createPinia)

app.mount('#app')