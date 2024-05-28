<template>
    <div class="article">
        <KeepAlive>
          <HeadImageBox tag="article" :title="pageValueList.title" :info="pageValueList.id"></HeadImageBox>
        </KeepAlive>
        <!-- 文章具体内容 -->
        <div class="article-content">
            <div v-html="pageArticle" class="article-content-page"></div>
            <div class="article-content-bottom">
              <div  class="article-content-bottom-commentBox">
                <div  class="article-content-bottom-commentBox-head">
                  <div ></div>
                  <div>留言</div>
                </div>
                <a-textarea
                    class="article-content-bottom-commentBox-input"
                    v-model:value="commentValue"
                    placeholder="写下点什么..."
                    :auto-size="{ minRows: 7, maxRows: 5 }"
                  />
                <div class="article-content-bottom-commentBox-fn" >
                  <div class="article-content-bottom-commentBox-fn-send">
                    <i class="xblog-EmojiAdd xfont"></i>
                    <i class="xblog-tupian xfont"></i>
                  </div>
                  <div class="article-content-bottom-commentBox-fn-submit" @click="subMitComment()">
                    提交
                  </div>
                </div>
                <div class="article-content-bottom-commentBox-response">
                  <div class="article-content-bottom-commentBox-response-title">
                    Comments | {{ commentList.length || 0 }} 条留言
                  </div>
                  <CommentBox :commentList="commentList" @toReply="toReply"></CommentBox>
                  <div v-show="commentList.length === 0" class="article-content-bottom-commentBox-response-noResponse">
                    来发第一个留言呗~
                  </div>
                </div>
              </div>
            </div>
        </div>
        <!-- 评论弹窗 -->
        <ReplySubmitDielog :dialogFormVisible="dialogFormVisible" @replyVisible="replyVisible" @submitReply="submitReply"></ReplySubmitDielog>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
const router = useRoute()
import type {setCommentType} from '@/common/ts/commonInterface.ts'
//模拟数据
let pageValueList = ref<{title:any,id:any}>({title:'',id:''})
const pageArticle = ref<string>(
    `<h2>新闻1</h2>
    <p>当地时间21日，伊朗总统办公室负责人侯赛因表示，在总统莱希乘坐的直升机发生事故后，
    总统办公室曾试图拨打总统以及外长的手机，但没有人接听。随后，他们拨打了飞行员的手机，
    直升机上的另一个人阿勒·哈希姆接听了电话。他表示，自己掉到了山上，感觉非常不舒服，
    并且不知道自己位置在哪里，也不知道其他人在什么地方。</p>
    <h2>新闻2</h2>
    <p>当地时间21日，伊朗总统办公室负责人侯赛因表示，在总统莱希乘坐的直升机发生事故后，
    总统办公室曾试图拨打总统以及外长的手机，但没有人接听。随后，他们拨打了飞行员的手机，
    直升机上的另一个人阿勒·哈希姆接听了电话。他表示，自己掉到了山上，感觉非常不舒服，
    并且不知道自己位置在哪里，也不知道其他人在什么地方。</p><h2>新闻3</h2>
    <p>当地时间21日，伊朗总统办公室负责人侯赛因表示，在总统莱希乘坐的直升机发生事故后，
    总统办公室曾试图拨打总统以及外长的手机，但没有人接听。随后，他们拨打了飞行员的手机，
    直升机上的另一个人阿勒·哈希姆接听了电话。他表示，自己掉到了山上，感觉非常不舒服，
    并且不知道自己位置在哪里，也不知道其他人在什么地方。</p>`
)
onBeforeMount(()=>{
    pageValueList.value.id = router.query.id
    pageValueList.value.title = router.query.title
})
//输入文本
let commentValue = ref<string>('')
//文本清空
const cleanInput=()=>{
  commentValue.value = ''
}
//文章评论-提交
const subMitComment =()=>{
    cleanInput()
    console.log(commentValue.value)
}
//评论列表
let commentList = ref<setCommentType[]>([
  {
    id:'12320',
    userName:'shark-1',
    releaseTime:'2024-5-25 12:15:40',
    comment:'我来评论啦！！！',
    avatarImg:'../../assets/image/netTextImg/arvator.jpg',
  },
  {
    id:'12322',
    userName:'shark-2',
    releaseTime:'2024-5-25 12:15:40',
    to:'shark',
    comment:'我来评论啦！！！',
    avatarImg:'../../assets/image/netTextImg/arvator.jpg',
  },
  {
    id:'12321',
    userName:'shark-3',
    releaseTime:'2024-5-25 12:15:40',
    comment:'我来评论啦---！！！',
    avatarImg:'../../assets/image/netTextImg/arvator.jpg',
  }
])



//回复评论
let toUserNames = ref<string>('')
let toIds = ref<string|number>('')
const dialogFormVisible = ref<boolean>(false)
//回复事件
const toReply=(toId:string|number,toUserName:string)=>{
  toUserNames.value = toUserName
  toIds.value = toId
  dialogFormVisible.value = true
}
//提交弹窗事件
const replyVisible = (visible:boolean)=>{
  if(!visible) dialogFormVisible.value = visible
}
//回复评论 提交 
const submitReply = (text:string)=>{
  console.log(text,toUserNames.value,toIds.value)
}
</script>
<style lang="scss" scoped >
@import url('./style/index.scss');
</style>
