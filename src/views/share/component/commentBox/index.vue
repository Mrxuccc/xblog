<template>
    <div v-for="(item,index) in commentList" :key="index" class=" comments">
      <div class=" comments-commenter">
            <img :src="getImageUrl(item.avatarImg)" class=" comments-commenter-avatar"/>
        <div class=" comments-commenter-userInfor">
              <div class=" comments-commenter-userInfor-name">
                {{ item.userName }}
            </div>
            <div class=" comments-commenter-userInfor-date">
                {{ item.releaseTime }}
            </div>
            <div class=" comments-commenter-userInfor-reply" @click="toReply(item.id,item.userName)" >
                回复
            </div>
        </div>
      </div>
      <div class=" comments-value">
            <span  class=" comments-value-to" v-if="item.to">@{{ item.to }}</span><span  class=" comments-value-commentValue">{{ item.comment }}</span>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { getImageUrl } from '@/common/ts/common.ts'
import type {setCommentType} from '@/common/ts/commonInterface.ts'

const props = withDefaults(
    defineProps<{
        commentList:setCommentType[]
    }>(),{
        commentList:()=>[]
    }
)
props
// 回复
const emit = defineEmits(['toReply'])
const toReply = (id:string|number,userName:string) =>{
    emit('toReply',id,userName)
}
</script>

<style lang="scss" scoped>
    @import url('./style/index.scss');
</style>