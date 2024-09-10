<template>
    <div v-for="(item, index) in commentList" :key="index" class=" comments">
        <div class=" comments-commenter">
            <img :src="item.avatarImg ? getBGImgLink(item.avatarImg) : undefined" class=" comments-commenter-avatar" />
            <div class=" comments-commenter-userInfor">
                <div class=" comments-commenter-userInfor-name">
                    {{ item.username }}
                </div>
                <div class=" comments-commenter-userInfor-date">
                    {{ moment(item.createTime).format("YYYY-MM-DD hh:mm:ss") }}
                </div>
                <div class=" comments-commenter-userInfor-reply" @click="toReply(item.id, item.userid)">
                    回复
                </div>
            </div>
        </div>
        <div class="comments-value">
            <span class=" comments-value-to" v-if="item.to">@{{ item.to }}</span><span
                class=" comments-value-commentValue">{{ item.comment }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import moment from 'moment'
import type { setCommentType } from '@/common/ts/commonInterface'
import { getBGImgLink } from '@/common/ts/common'
const props = withDefaults(
    defineProps<{
        commentList: setCommentType[]
    }>(), {
    commentList: () => []
}
)
props
// 回复
const emit = defineEmits(['toReply'])
const toReply = (id: string | number, userid: string | number) => {
    console.log(props.commentList)
    emit('toReply', id, userid)
}
</script>

<style lang="scss" scoped>
@import url('./style/index.scss');
</style>