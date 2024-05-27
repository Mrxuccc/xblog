<template>
  <div class="app">
    <PageHead></PageHead>
    <router-view ></router-view>
    <BackTop></BackTop>
    <PageFooter v-if="footerShow"></PageFooter>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
const router = useRoute()
let footerShow = ref<boolean>(true)

watch(
  ()=> router.path,
  (newVal)=>{
    if(newVal=='/Login'){
      footerShow.value = false
    }else {
      footerShow.value = true
    }
  }
)
</script>
<style lang="less"  scoped>
.app {
  position: relative;
  height: auto;
  max-width: 2560px;
  margin: 0 auto;
  overflow: hidden;
}

</style>
