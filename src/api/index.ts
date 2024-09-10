import newAxios from '@/https/newAxios'
// import type { SetBoxImageValue } from '@/common/ts/commonInterface'



const urlList = {
    getNewsList: `/xblog/news/list`,
    getNews: `/xblog/news`,
    getHeadImg: '/xblog/getHeadBackList',
    getCommentList: '/xblog/news/comment'
}

//获取get Newslist
export function getNewsList(params: { pageSize: number, pageNo: number }) {
    return new Promise((resolve, reject) => {
        newAxios.get(
            urlList.getNewsList,
            {
                params: params
            }
        ).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
};

//获取get News
export function getNews(params: { id: string }) {
    return new Promise((resolve, reject) => {
        newAxios.get(
            urlList.getNews,
            {
                params
            }
        ).then(res => {
            // console.log(res)
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
};

//获取 headBackImgList
export function getHeadImg() {
    return new Promise((resolve, reject) => {
        newAxios.get(
            urlList.getHeadImg
        ).then(res => {
            // console.log(res)
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

//获取 评论 列表
export function getCommentList(params: { pageSize?: number, pageNo?: number, id: string | number, }) {
    return new Promise((resolve, reject) => {
        newAxios.get(
            urlList.getCommentList,
            {
                params: params
            }
        ).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
};
//userid,comment,shareid,toUserid(评论对象的用户id),toReplyid(评论对象的id)  /article
//获取 评论/回复 列表
export function pushCommentList(params: { userid: number | string, shareid: string | number, toUserid?: string | number, comment?: string, toReplyid?: string | number, showImg?: string | [] }) {
    return new Promise((resolve, reject) => {
        newAxios.post(
            urlList.getCommentList,
            params
        ).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
};
