<template>
  <!-- 页面头部菜单栏 -->
  <Transition name="head-slide-fade" >
    <div v-if="isShow" class="headerBar" id="headerBar" :class="{'head-up-1th-scorll':headCondition==0,'head-up-2th-scorll':headCondition==1}">
        <div class="LOGOICON" >
          SHARK
        </div>
        <!-- 一级菜单 -->
        <template v-for="(item,index) in routerList" :key="index">
          <router-link :to="item.path" v-if="!item.meta.hidden"  >
            <div class="headerBar-button">
              {{ item.name }}
            </div>
          </router-link>
        </template>
        <!-- 用户头像，用户登录，退出登录 -->
        <Router-Link to="/Login">
          <el-avatar class="headerBar-avatar" :size="25" :src="state.circleUrl" >
          </el-avatar>
        </Router-Link>
    </div>
  </Transition>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const routerList =ref(router.getRoutes())

let isShow = ref<boolean>(true)
let headCondition = ref<number>(0)
let directionKeyValue = ref<number>(0)
const state = reactive({circleUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',})
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
