import { createApp } from 'vue'
import App from './App.vue'
import router from './router'// 路由
import ElementPlus from 'element-plus'
import {createPinia} from "pinia"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import 'element-plus/dist/index.css'
import './style.css'

const app = createApp(App)

app.use(router)
app.use(Antd)
app.use(createPinia)
app.use(ElementPlus)
app.mount('#app')