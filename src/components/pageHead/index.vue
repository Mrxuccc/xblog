<template>
  <Transition name="head-slide-fade" >
    <div v-if="isShow" class="headerBar" id="headerBar" :class="{'head-up-1th-scorll':headCondition==0,'head-up-2th-scorll':headCondition==1}">
        <div class="LOGOICON" >
          SHARK
        </div>
        <div class="headerBar-button">
          首页
        </div>
        <div class="headerBar-button">
          去分享
        </div>
        <div class="headerBar-button">
          留言
        </div>
        <div class="headerBar-button">
          联系我
        </div>
        <div class="headerBar-button">
          后台
        </div>
        <div class="headerBar-button">
          登录
        </div>
    </div>
  </Transition>
</template>
<script lang="ts" setup>
import { onMounted,onBeforeUnmount,ref } from 'vue'

let isShow = ref<boolean>(true)
let headCondition = ref<number>(0)
let directionKeyValue = ref<number>(0)

//头部栏逻辑控制
const handleScroll = ()=> {
  // 页面滑动的距离
  let screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  let scrollTop = document.documentElement.scrollTop
  let scroll = scrollTop - directionKeyValue.value;
  directionKeyValue.value = scrollTop;
  if(scroll<0){ //上滑
    isShow.value = true
    headCondition.value = scrollTop>= screenHeight?1:0;//样式变化
  }else{//下滑
    if(scrollTop>= screenHeight) { //样式变化
      isShow.value = false
      headCondition.value = 1
    }else {
      headCondition.value = 0
      isShow.value = true
    }
  }
}

onMounted(()=>{
    window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(()=>{
    window.removeEventListener('scroll', handleScroll)
})

</script >
<style lang="scss"  scoped>
@import url('./style/index.scss');
</style>
