<template>
  <div v-if="isShow" id="headerBar">
      <div>
        首页
      </div>
      <div>
        设置
      </div>
      <div>
        关于
      </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted,onBeforeUnmount,ref } from 'vue'
let isShow = ref<boolean>(false)
const handleScroll = ()=> {
  // 页面滑动的距离
  let scrollTop = document.documentElement.scrollTop
  // 当页面滑动的距离大于300px时元素显示，否则不显示
  if (scrollTop >= 100) {
    isShow.value = true
  } else {
    isShow.value = false
  }
}


onMounted(()=>{
    window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(()=>{
    window.removeEventListener('scroll', handleScroll)
})

</script >
<style lang="less"  scoped>
#headerBar {
  position: fixed;
  top: 10px;
  left:50%;
  right:50%;
  transform:translate(-50%,0);
  z-index: 1002;
  padding: 0 24px;
  max-width: calc( 2560px - 2%);
  min-height:21px;
  width: 98%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 9px;
  background-color: rgba(255, 251, 240, 0.5);
  
  &>div {
    cursor: pointer;
    margin: 0 5px;
    color: @--headTextColor;
  }
}
</style>
