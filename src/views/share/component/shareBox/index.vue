<template>
  <div class="shareBox" v-for="(item, index) in valueList" :key="index">
    <div class="shareBox-head">
      <img :src="getBGImgLink(item.avatarImg)" class="shareBox-head-img" />
      <div class="shareBox-head-name">
        {{ item.username }}
      </div>
    </div>
    <div class="shareBox-content">
      <div class="shareBox-content-text">{{ item.info }}</div>
      <a-image width="40%" :src="getBGImgLink(items['img'])" v-for="(items, key) in item.showImg" :key="key" />
    </div>
    <div class="shareBox-bottom">
      <div class="shareBox-bottom-box">
        <div class="shareBox-bottom-box-time">
          {{ moment(item.createTime).format("YYYY-MM-DD hh:mm:ss") }}
        </div>
        <div class="shareBox-bottom-box-comment" @click="toComment(index, item.id)">
          <div class="shareBox-bottom-box-comment-number">
            {{ item.commentNumber }}
          </div>
          <SvgIcon iconName="xblog-chat" class-name="xblog-chat"></SvgIcon>
        </div>
      </div>
      <div v-if="index == openCommentIndex" class="shareBox-bottom-commentBox">
        <div class="shareBox-bottom-commentBox-head">
          <div></div>
          <div>留言</div>
        </div>
        <a-textarea class="shareBox-bottom-commentBox-input" v-model:value="commentValue" placeholder="写下点什么..."
          :auto-size="{ minRows: 7, maxRows: 5 }" />
        <div class="shareBox-bottom-commentBox-fn">
          <div class="shareBox-bottom-commentBox-fn-send">
            <i class="xblog-EmojiAdd xfont"></i>
            <i class="xblog-tupian xfont"></i>
          </div>
          <div class="shareBox-bottom-commentBox-fn-submit" @click="subMitComment(item.id)">
            提交
          </div>
        </div>
        <div class="shareBox-bottom-commentBox-response">
          <div class="shareBox-bottom-commentBox-response-title">
            Comments | {{ commentList.length || 0 }} 条留言
          </div>
          <CommentBox :commentList="commentList" @toReply="toReply"></CommentBox>
          <div v-show="commentList.length === 0" class="shareBox-bottom-commentBox-response-noResponse">
            来发第一个留言呗~
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment';
import { getBGImgLink } from '@/common/ts/common'
import type { setShareInfoType, setCommentType } from '@/common/ts/commonInterface'
let openCommentIndex = ref<number>(-1)
const props = withDefaults(
  defineProps<{
    valueList: setShareInfoType[] //第一层 share
    commentList: setCommentType[] //第二层 comment 评论
  }>(), {
  valueList: () => [
    {
      id: '',
      username: '',
      createTime: '',
      userid: '',
      info: '',
      avatarImg: '',
      showImg: [],
      commentNumber: 0,
    }
  ],
  commentList: () => []  //留言
}
)
props


//定义组件传值
const emit = defineEmits(['toReplys', 'subMitComment', 'toComment'])

//评论点击事件
const toComment = (index: number, shareid: number | string) => {
  cleanInput()
  openCommentIndex.value = (openCommentIndex.value == index) ? -1 : index
  if (openCommentIndex.value !== -1) {
    emit('toComment', shareid)
  }
}
//输入文本
let commentValue = ref<string>('')
//提交
const subMitComment = (id: string | number) => {
  emit('subMitComment', id, commentValue.value)
  cleanInput()
}
//文本清空
const cleanInput = () => {
  commentValue.value = ''
}
//评论回复
const toReply = (id: string | number, ids: string) => {
  emit('toReplys', id, ids)
}
</script>

<style lang="scss" scoped>
@import url(./style/index.scss);
</style>