<template>
    <div class="shareBox" v-for="(item,index) in valueList" :key="index">
        <div class="shareBox-head">
          <img :src="getImageUrl(item.avatarImg)"  class="shareBox-head-img"/>
          <div  class="shareBox-head-name">
            {{ item.userName }}
          </div>
        </div>
        <div class="shareBox-content">
            <div class="shareBox-content-text">{{ item.info }}</div>
            <a-image
                width="40%"
                :src="getImageUrl(items)"
                v-for="(items,key) in item.showImg" :key="key"
            />
        </div>
        <div class="shareBox-bottom">
          <div class="shareBox-bottom-box">
            <div class="shareBox-bottom-box-time">
              {{item.releaseTime}}
            </div>
            <div class="shareBox-bottom-box-comment" @click="toComment(index)">
              <div class="shareBox-bottom-box-comment-number">
                {{ item.commentNumber }}
              </div>
              <SvgIcon iconName="xblog-chat" class-name="xblog-chat"  ></SvgIcon>
            </div>
          </div>
          <div v-if="index==openCommentIndex"  class="shareBox-bottom-commentBox">
            <div  class="shareBox-bottom-commentBox-head">
              <div ></div>
              <div>留言</div>
            </div>
            <a-textarea
                class="shareBox-bottom-commentBox-input"
                v-model:value="commentValue"
                placeholder="写下点什么..."
                :auto-size="{ minRows: 7, maxRows: 5 }"
              />
            <div class="shareBox-bottom-commentBox-fn" >
              <div class="shareBox-bottom-commentBox-fn-send">
                <i class="xblog-EmojiAdd xfont"></i>
                <i class="xblog-tupian xfont"></i>
              </div>
              <div class="shareBox-bottom-commentBox-fn-submit" @click="subMitComment(item.id,item.userName)">
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
import { getImageUrl } from '@/common/ts/common.ts'
import type {setShareInfoType,setCommentType} from '@/common/ts/commonInterface.ts'
let openCommentIndex = ref<number>(-1) 
const props = withDefaults(
    defineProps<{
        valueList:setShareInfoType[] //第一层 share
        commentList:setCommentType[] //第二层 comment 评论
    }>(),{
        valueList:()=>[
            {
                id:'',
                userName:'',
                releaseTime:'',
                info:'',
                avatarImg:'',
                showImg:[''],
                commentNumber:0,
            }
        ],
        commentList:()=>[]  //留言
    }
)
props

//定义组件传值
const emit = defineEmits(['toReplys','subMitComment'])

//评论点击事件
const toComment=(index:number) =>{
  cleanInput()
  openCommentIndex.value = (openCommentIndex.value == index)? -1:index
}
//输入文本
let commentValue = ref<string>('')
//提交
const subMitComment = (id:string|number,userName:string)=>{
  emit('subMitComment',id,userName,commentValue.value)
}
//文本清空
const cleanInput=()=>{
  commentValue.value = ''
}
//评论回复
const toReply=(id:string|number,userName:string)=>{
  emit('toReplys',id,userName)
}
</script>

<style lang="scss" scoped>
@import url(./style/index.scss);
</style>