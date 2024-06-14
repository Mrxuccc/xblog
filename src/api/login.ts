import newAxios from '@/https/newAxios'
import type {LoginType} from '@/common/ts/commonInterface'



const urlList = {
    test:`/xblog/user/getUser`,
    login:`/xblog/login`,
    register:`/xblog/login/register`,
    publicKey:`/xblog/login/publicKey`
}

//登录
export function Login( params: LoginType) {
    return new Promise((resolve, reject) => {
        newAxios.post(
            urlList.login,
            params
        ).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
};
//注册
export function Register( params: LoginType) {
    return new Promise((resolve, reject) => {
        newAxios.post(
            urlList.register,
            params
        ).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
};

//获取公钥

export function getPublicKey(){
    return new Promise((resolve, reject) => {
        newAxios.get(
            urlList.publicKey
        ).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}