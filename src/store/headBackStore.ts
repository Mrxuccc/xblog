import { defineStore } from "pinia"
import {getHeadImg} from '@/api/index'
export const headBackStore = defineStore("headBackImg", {
    state: () => {
        return {
            headImgList:[]
        }
    },
    getters: {
    },
    actions: {
        getHeadImgList() {
            getHeadImg().then((res:any)=>{
                if(res.data) {
                    this.headImgList = res.data as []
                }
            })
        }
    },
    //数据持久化 存储 localStorage
    persist: true
})