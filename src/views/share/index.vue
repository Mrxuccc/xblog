<template>
    <div class="share">
      <KeepAlive>
        <HeadImageBox></HeadImageBox>
      </KeepAlive>
      <div class="share-content" >
        <div class="share-content-boxList">
          <shareBox :valueList="showInfoList" :commentList="commentList" @subMitComment="subMitComment" @toReplys="toReplys" @toComment="toComment"></shareBox>
          <!-- 翻页器 -->
          <LigntButton v-if="!isNoneValue" @click="nextPage"></LigntButton>
          <PageNoneBox v-else></PageNoneBox>
        </div>
      </div>
      <!-- 评论弹窗 -->
      <ReplySubmitDielog :dialogFormVisible="dialogFormVisible" @replyVisible="replyVisible" @submitReply="submitReply"></ReplySubmitDielog>
    </div>
</template>

<script lang="ts" setup>
import shareBox from './component/shareBox/index.vue'
import type {setShareInfoType,setCommentType} from '@/common/ts/commonInterface'
import {getShareList,getCommentList,postCommentList} from '@/api/share'
let isNoneValue = ref<boolean>(false)
//分享列表
let showInfoList = ref<setShareInfoType[]>([])
//判断是否有下一页
const nextPageOf=()=>{
  const result = (pageNo.value + 1)*pageSize.value //当前个数
    if(result >= totals.value){ 
      isNoneValue.value = true
    }else {
      isNoneValue.value = false
    }
}

// 获取 value 数据
const pageSize = ref<number>(6)
let pageNo = ref<number>(0)
let totals = ref<number>(0)
const getValue = ()=>{
  getShareList({
    pageSize:pageSize.value,
    pageNo:pageNo.value
  }).then(res=>{
    const {record,total} = res.data
    totals.value = total
    showInfoList.value = record
    // 判断是否有下一页
    nextPageOf()
  })
}

let shareids = ref<string|number>('')
//评论列表
let commentList = ref<setCommentType[]>([])
//获取评论数据
const toComment = (shareid:string|number)=>{
  shareids.value = shareid
  getCommentList({id:shareid}).then(res=>{
    commentList.value = res.data as setCommentType[]
  })
}

//下一页
const nextPage = ()=>{ 
  pageNo.value += 1
  getShareList({
    pageSize:pageSize.value,
    pageNo:pageNo.value
  }).then(res=>{
    const record = res.data.record
    showInfoList.value= showInfoList.value.concat(record)
    // 判断是否有下一页
    nextPageOf()
    
  })
}
//分享评论-提交
const subMitComment =(id:string|number,comment:string)=>{
  postCommentList({
    shareid:id,
    userid:10, //
    comment:comment
  }).then(res=>{
    console.log(res)
    toComment(shareids.value)
  })
  
}

//回复评论
let toUserNames = ref<string>('')
let toIds = ref<string|number>('')
const dialogFormVisible = ref<boolean>(false)
const toReplys=(toId:string|number,toUserName:string)=>{
  console.log('1230')
  toUserNames.value = toUserName
  toIds.value = toId
  dialogFormVisible.value = true
}
const replyVisible = (visible:boolean)=>{
  if(!visible) dialogFormVisible.value = visible
}
//回复评论 提交 
const submitReply = (text:string)=>{
  console.log(text,toUserNames.value,toIds.value)
}



onBeforeMount(() => {
  getValue()
})
</script>

<style lang="scss" scoped>
@import url(./style/index.scss);
</style>