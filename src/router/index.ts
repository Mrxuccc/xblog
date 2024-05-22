import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import login from "@/views/Login/Login.vue"
import music from "@/views/music/index.vue"
import index from "@/views/index/index.vue"
import share from "@/views/share/index.vue"
import news from "@/views/movingNews/index.vue"
import camera from "@/views/camera/index.vue"
import client from "@/views/client/index.vue"
import guestbook from "@/views/guestbook/index.vue"
import article from "@/views/article/index.vue"
// import { useStore } from "@/stroe";
// import { getUserRoutes } from "@/api/user";

const routes: Array<RouteRecordRaw> = [
    {
        name:'首页',
        path:'/',
        component:index,
        meta:{
            hidden:false
        }
    },{
        name:"动态",
        path:'/news',
        component:news,
        meta:{
            hidden:false
        }
    },
    {
        name:'分享',
        path:'/share',
        component:share,
        meta:{
            hidden:false
        }
    },
    {
        name:'登录',
        path: '/Login',
        component: login,
        meta:{
            hidden:true
        }
    },
    {
        name:'照片',
        path:'/camera',
        component:camera,
        meta:{
            hidden:false
        }
    },
    {
        name:'音乐',
        path: '/music',
        component: music,
        meta:{
            hidden:false
        }
    },
    {
        name:'留言',
        path:'/guestbook',
        component:guestbook,
        meta:{
            hidden:false
        }
    },
    {
        name:'后台',
        path:'/client',
        component:client,
        meta:{
            hidden:false
        }
    }
    ,
    {
        path:'/article',
        component:article,
        meta:{
            hidden:true
        }
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