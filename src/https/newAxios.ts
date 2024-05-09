import { message } from 'ant-design-vue';
import axios from 'axios';
// import modelTool from '@/util/modelTool';//自己封装的方法函数
import router from '@/router';
// import { errorCodeType } from '../errorCodeType';//不同状态码，返回不同的值

// 创建axios实例
const newAxios = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,//拿到执行环境下的请求接口
    // 超时设置
    // timeout: 15000,
    headers: { 'Content-Type': 'application/json;charset=utf-8' }
});

// 请求拦截
newAxios.interceptors.request.use(
    config => {
        // 本地拿到token，添加到请求头中
        // let tokenObj = modelTool.tokenBoolean();
        // if (tokenObj.state) config.headers['Authorization'] = `Bearer ${tokenObj.token}`;
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// 响应拦截
newAxios.interceptors.response.use(
    response => {
        if (response.data['code'] === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    // 服务器状态码不是200的情况
    error => {
        console.log(error.response);

        // if (error.response.status) {
        //     switch (error.response.data.code) {
        //         // 登录有效期已过，请用户重新登录！
        //         case 401:
        //             setTimeout(() => {
        //                 message.warning(error.response.data.message)
        //                 modelTool.localStorageDel()
        //                 router.push('/login')
        //             }, 1000)
        //             break;
        //         // 请求错误
        //         case 400:
        //             message.warning(error.response.data.message)
        //             break;
        //         // 其他错误
        //         default:
        //             message.error(errorCodeType(error.response.status))
        //             break;
        //     }
        //     return Promise.reject(error.response)
        // }
    }
);

// 暴露axios实例
export default newAxios;