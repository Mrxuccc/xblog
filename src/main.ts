import { createApp } from 'vue'
import App from './App.vue'
import router from './router'// 路由
import ElementPlus from 'element-plus'
import { createPinia } from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'; //数据持久化
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import 'element-plus/dist/index.css'
import './style.css'
import 'animate.css'
import '@/assets/iconfonts/iconfont.css'
import '@/assets/iconfonts/iconfont.js'

//自定义钩子
import { vVisibleOnce } from '@/common/ts/vVisbleOnce';
//markDown
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
// 这是预览时引用的
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// 引入你所使用的主题 此处以 github 主题为例
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs
import hljs from 'highlight.js';
//预览的主题
VMdPreview.use(githubTheme, {
    Hljs: hljs,
});
//编辑器的主题
VueMarkdownEditor.use(vuepressTheme, {
    Prism,
});
const store = createPinia()
store.use(piniaPluginPersistedstate);
const app = createApp(App)
app.use(VMdPreview);
app.use(VueMarkdownEditor);
app.directive('visible-once', vVisibleOnce);
app.use(Antd)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')