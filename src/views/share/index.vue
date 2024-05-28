<template>
    <div class="share">
      <KeepAlive>
        <HeadImageBox></HeadImageBox>
      </KeepAlive>
      <div class="share-content" >
        <div class="share-content-boxList">
          <shareBox :valueList="showInfoList" :commentList="commentList" @subMitComment="subMitComment" @toReplys="toReplys"></shareBox>
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
import type {setShareInfoType,setCommentType} from '@/common/ts/commonInterface.ts'
let isNoneValue = ref<boolean>(false)
//分享列表
let showInfoList = ref<setShareInfoType[]>([
  {
    id:'12345',
    userName:'shark',
    releaseTime:'2024-5-22 19:29:90',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    avatarImg:'../../assets/image/netTextImg/arvator.jpg',
    showImg:['../../assets/image/Material/page10.jpg'],
    commentNumber:0
  },
  {
    id:'2312',
    userName:'shark',
    releaseTime:'2024-5-21 19:29:90',
    info:'xxxxxxxxxxxxxx',
    avatarImg:'../../assets/image/netTextImg/arvator.jpg',
    showImg:['../../assets/image/Material/page5.jpg'],
    commentNumber:0
  },
  {
    id:'5432',
    userName:'shark',
    releaseTime:'2024-5-20 19:29:90',
    info:'xxxxxxxxxxxxxx',
    avatarImg:'../../assets/image/netTextImg/arvator.jpg',
    showImg:['../../assets/image/Material/page8.jpg'],
    commentNumber:0
  }
])
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
//下一页
const nextPage=()=>{
  let list:setShareInfoType[] = [
    {
      id:'12345',
      userName:'shark',
      releaseTime:'2024-5-22 19:29:90',
      info:`
              1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
              2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
              3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
              4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
              5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
      avatarImg:'../../assets/image/netTextImg/arvator.jpg',
      showImg:['../../assets/image/Material/page10.jpg'],
      commentNumber:0
    },
    {
    id:'2312',
    userName:'shark',
    releaseTime:'2024-5-21 19:29:90',
    info:'xxxxxxxxxxxxxx',
    avatarImg:'../../assets/image/netTextImg/arvator.jpg',
    showImg:['../../assets/image/Material/page10.jpg'],
    commentNumber:0
    },
    {
    id:'5432',
    userName:'shark',
    releaseTime:'2024-5-20 19:29:90',
    info:'xxxxxxxxxxxxxx',
    avatarImg:'../../assets/image/netTextImg/arvator.jpg',
    showImg:['../../assets/image/Material/page10.jpg'],
    commentNumber:0
    }
  ]
  list.map(_=>{
    showInfoList.value.push(_)
  })
}
//分享评论-提交
const subMitComment =(id:string|number,userName:string,text:string)=>{
  console.log(id,userName,text)
}

//回复评论
let toUserNames = ref<string>('')
let toIds = ref<string|number>('')
const dialogFormVisible = ref<boolean>(false)
const toReplys=(toId:string|number,toUserName:string)=>{
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
</script>

<style lang="scss" scoped>
@import url(./style/index.scss);
</style>