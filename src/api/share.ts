import newAxios from '@/https/newAxios'
// import type {SetBoxImageValue} from '@/common/ts/commonInterface'



const urlList = {
    getShareList: `/xblog/share`,
    getCommentList: '/xblog/share/comment'
}

//获取 share 列表
export function getShareList(params: { pageSize: number, pageNo: number }) {
    return new Promise((resolve, reject) => {
        newAxios.get(
            urlList.getShareList,
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

//获取 getCommentList 列表
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
//userid,comment,shareid,toUserid,toReplyid
//获取 评论/回复 列表
export function postCommentList(params: { userid: number | string, shareid: string | number, toUserid?: string | number, comment?: string, toReplyid?: string | number, showImg?: string | [] }) {
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
