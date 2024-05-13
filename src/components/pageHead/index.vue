<template>
  <Transition name="head-slide-fade" >
    <div v-if="isShow" id="headerBar" :class="{'head-up-1th-scorll':headCondition==0,'head-up-2th-scorll':headCondition==1}">
        <div class="LOGOICON" >
          SHARK
        </div>
        <div>
          首页
        </div>
        <div>
          设置
        </div>
        <div>
          联系我
        </div>
        <div>
          后台
        </div>
    </div>
  </Transition>
</template>
<script lang="ts" setup>
import { onMounted,onBeforeUnmount,ref } from 'vue'
let isShow = ref<boolean>(true)
let headCondition = ref<number>(0)
let directionKeyValue = ref<number>(0)

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
    window.addEventListener('scroll', handleScroll,)
})
onBeforeUnmount(()=>{
    window.removeEventListener('scroll', handleScroll)
})

</script >
<style lang="scss"  scoped>
#headerBar {
  position: fixed;
  top: 10px;
  left:50%;
  right:50%;
  transform:translate(-50%,0);
  max-width: calc( 2560px - 2%);
  min-height:21px;
  width: 98%;
  height: 42px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 1002;
  border-radius: 9px;
  
  &>div {
    cursor: pointer;
    margin: 0 5px;
    color: $headText-Color;
  }
  &>.LOGOICON {
    margin-right: auto;
  }
}
.head-up-1th-scorll {
  background-color: rgb(0, 0, 0,.0);
} 
.head-up-1th-scorll:hover {
  background-color: rgb(0, 0, 0,.5);
} 
.head-up-2th-scorll {
  background-color: #fff ;
  box-shadow: .5px 1px 6px rgba(128, 128, 128,.1);
  &>div {
    color:#000 !important;
  }
} 

//动效显示隐藏
.head-slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.head-slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.head-slide-fade-enter-from,
.head-slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
