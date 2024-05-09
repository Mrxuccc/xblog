import newAxios from "./newAxios";//引入axios实例

// 请求封装并暴露
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url: string, params: any) {
    return new Promise((resolve, reject) => {
        newAxios.get(
            url,
            params
        ).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
};
/**
* post方法，对应post请求
* @param {String} url [请求的url地址]
* @param {Object} params [请求时携带的参数]
*/
export function post(url: string, params: any) {
    return new Promise((resolve, reject) => {
        newAxios.post(
            url,
            params
        ).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
};