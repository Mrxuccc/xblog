import { defineStore } from "pinia"
export const userStore = defineStore("userStore", {
    state: () => {
        return {
            count: 10
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2
        },
    },
    actions: {
        //可以存放普通函数，也可以存放异步函数
        increment(count: number) {
            // context.commit("xxxx",state)
            this.count += count
        },
        decrement() {
            this.count -= 10
        },
        asyncIncrement() {
            setTimeout(() => {
                this.count += 10
            }, 1000);
        }
    }
})