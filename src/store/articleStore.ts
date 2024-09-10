import { defineStore } from "pinia"
import { getNews } from '@/api/index'
import type { SetBoxImageValue } from '@/common/ts/commonInterface'
export const articleStore = defineStore("articleStore", {
    state: () => {
        return {
            article: {} as SetBoxImageValue
        }
    },
    getters: {

    },
    actions: {
        getArticle(id: string) {
            getNews({ id: id }).then((res: any) => {
                if (res.data) {
                    this.article = res.data[0] as SetBoxImageValue
                }
            })
        }
    },
    //数据持久化 存储 localStorage
    persist: true
})