import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import login from "@/views/Login/Login.vue"
import home from "@/views/homePage/index.vue"
import index from "@/views/index/index.vue"
// import { useStore } from "@/stroe";
// import { getUserRoutes } from "@/api/user";

const routes: Array<RouteRecordRaw> = [
    {
        name:'首页',
        path:'/',
        component:index,
    },
    {
        path: '/Login',
        component: login
    },
    {
        path:'/home',
        component:home
    }
]
const router = createRouter({
    routes,
    // 路由模式
    history: createWebHistory()
})

// 全局导航守卫 
// router.beforeEach(async (to, _from, next) => {
//     /* 路由发生变化修改页面title */
//     if (to.meta.title) {
//         // to.meta.title:名称挂载在路由表中
//         document.title ='myDome_' +  String(to.meta.title);
//     }
//     let token = localStorage.getItem('token');//获取本地token
//     if (token) {
//         const store = useStore();//实例化
//         if (store.routes.length < 1) {//当动态路由的数组对象为0时候，需要重新请求，并更新动态路由
//             let res: any = await getUserRoutes();//请求数据
//             if (200 === res.code) {
//                 store.addRoutes(res.data.routes, router);//添加动态路由
//                 // 最后手动添加重定向信息
//                 router.addRoute({
//                     path: "/:catchAll(.*)",
//                     redirect: "/404",
//                 })
//                 next({ ...to, replace: true });
//             } else {
//                 next()
//             }
//         } else {
//             next()
//         }
//     } else {
//         if (to.path == "/login") {
//             next();
//         } else {
//             next("/login")
//         }
//     }
// })

// 暴露出去
export default router;