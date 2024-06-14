import vue from '@vitejs/plugin-vue'
import { UserConfig, ConfigEnv, loadEnv, defineConfig } from "vite";

//配置路径别名
import path from "path";
const pathSrc = path.resolve(__dirname, "src");
//自动导入插件
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode,process.cwd())
  return {
    resolve: {
      alias: {
        "@": pathSrc,
      },
    },
    plugins: [
      vue(),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ["vue"],
        eslintrc: {
          enabled: true, // 是否自动生成 eslint 规则，建议生成之后设置 false 
          filepath: "./.eslintrc-auto-import.json", // 指定自动导入函数 eslint 规则的文件
        },
        dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"), // 指定自动导入函数TS类型声明文件路径
      }),
      Components({
        dts: path.resolve(pathSrc, "types", "components.d.ts"), // 指定自动导入组件TS类型声明文件路径
      }),
    ],
    css: {
      // CSS 预处理器
      preprocessorOptions: {
          //define global scss variable
          scss: {
              javascriptEnabled: true,//开启sass
              additionalData: '@import "@/styles/scss/variables.scss";'
          },
          less:{
              javascriptEnabled: true,//开启less
              additionalData: '@import "@/styles/less/variables.less";'
          }
      }
    },
    server: {
      host: '0.0.0.0',//指定服务器应该监听哪个 IP 地址
      port: 24000,//指定服务器端口号
      strictPort: true,//端口被占用直接退出
      https: false,//启用 TLS + HTTP/2
      open: false,//在开发服务器启动时自动在浏览器中打开应用程序
      proxy: {
        //配置自定义代理规则
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_DEV_URL,
          changeOrigin: true,
           rewrite: path => path.replace(new RegExp("^" + env.VITE_APP_BASE_API), "")
        },
          //  '/xblog-api': {
          //    target: 'http://127.0.0.1:20000',
          //    changeOrigin: true,//是否跨域
          //    rewrite: (path) => path.replace(/^\/xblog-api/, ''),
          //  },
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      terserOptions: {
          compress: {
              drop_console: true,
              drop_debugger: true,
          },
      },
    },
  }
})