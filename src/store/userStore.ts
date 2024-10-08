import { defineStore } from "pinia"
import type { userType } from '@/common/ts/commonInterface'
export const userStore = defineStore("userStore", {
    state: () => {
        return {
            token: '',
            userInfo: {} as userType
        }
    },
    getters: {
        getUser: (state) => state.userInfo
    },
    actions: {
        //可以存放普通函数，也可以存放异步函数
        setUser(user: userType | null) {
            if (user) {
                this.userInfo = user;
            } else {
                this.userInfo = {} as userType
            }
        },
        //更新整个对象
        updateUserInfo(userInfo: userType | null) {
            this.userInfo = userInfo ? userInfo : {} as userType;
        },
        //更新基础数据类型
        updateToken(token: string) {
            this.token = token;
        },
        //清楚数据
        cleanUserStore() {
            this.$reset()
            // this.token = '',
            // this.userInfo = {} as userType ;
        }
    },
    //数据持久化 存储 localStorage
    persist: true
})