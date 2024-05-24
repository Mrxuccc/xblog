<template>
    <div class="shareBox" v-for="(item,index) in valueList" :key="index">
        <div class="shareBox-head">
          <img :src="getImageUrl(item.avatarImg)"  class="shareBox-head-img"/>
          <div  class="shareBox-head-name">
            {{ item.userName }}
          </div>
        </div>
        <!-- 用grid布局 -->
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
            <div  class="shareBox-bottom-commentBox-input">
            </div>
          </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { getImageUrl } from '@/assets/ts/common.ts'
import type {setShareInfoType} from '@/assets/ts/commonInterface.ts'
let openCommentIndex = ref<number>(-1) 
const props = withDefaults(
    defineProps<{
        valueList:setShareInfoType[]
    }>(),{
        valueList:()=>[
            {
                id:'',
                userName:'',
                releaseTime:'',
                info:'',
                avatarImg:'',
                showImg:[''],
                commentNumber:0
            }
        ]
    }
)
props
const toComment=(index:number) =>{
  openCommentIndex.value = (openCommentIndex.value == index)? -1:index
}
</script>

<style lang="scss" scoped>
@import url(./style/index.scss);
</style>