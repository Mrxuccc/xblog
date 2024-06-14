import newAxios from '@/https/newAxios'
import type {SetBoxImageValue} from '@/common/ts/commonInterface'
 


const urlList = {
    getNewsList:`/xblog/news`,
}

//获取get News
export function getNewsList( params:{pageSize:number,pageNo:number}) {
    return new Promise((resolve, reject) => {
        newAxios.get(
            urlList.getNewsList,
            {
                params:params
            }
        ).then(res => {
            console.log(res)
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
};