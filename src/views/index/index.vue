<template>
  <!-- 首页 -->
  <div class="indexPage">
    <div class="indexPage-showPane">
      <div class="indexPage-showPane-SHOWICON">
        LONELY SHARK
      </div>
    </div>
    <div class="indexPage-content">
      <PageBox :valueList="pageimgList"></PageBox>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {SetBoxImageValue} from '@/assets/ts/commonInterface.ts'

let pageimgList = ref<SetBoxImageValue[]>([
  {
    text:'东京街头',
    img:'../../../src/assets/image/Material/page1.jpg',
    tag:'img',
    info:'',
    tagTextList:['SHARK','测试']
  },
  {
    text:'落日风车田',
    img:'../../../src/assets/image/Material/page2.jpg',
    tag:'img',
    info:'',
    tagTextList:['SHARK','测试']
  },
  {
    text:'测试标题3',
    img:'../../../src/assets/image/Material/page3.jpg',
    tag:'img',
    info:'',
    tagTextList:['SHARK']
  },
  {
    text:'测试标题4',
    img:'../../../src/assets/image/Material/page4.jpg',
    tag:'img',
    info:'',
    tagTextList:['SHARK']
  },
  {
    text:'测试标题5',
    img:'../../../src/assets/image/Material/page5.jpg',
    tag:'img',
    info:'',
    tagTextList:['SHARK']
  },
  {
    text:'测试标题6',
    img:'../../../src/assets/image/Material/page6.jpg',
    tag:'img',
    info:'',
    tagTextList:['SHARK']
  }
])

</script>
<style lang="scss" scoped>
@import url('./style/index.scss');
</style>
