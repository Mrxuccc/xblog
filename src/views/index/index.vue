<template>
  <!-- 首页 -->
  <div class="indexPage">
    <div class="indexPage-showPane">
      <div class="indexPage-showPane-SHOWICON">
        LONELY SHARK
      </div>
    </div>
    <div class="indexPage-content">
      <!-- 模块层 -->
      <div class="indexPage-content-boxs">
        <div class="indexPage-content-boxs-imgType1">
          <a-image
            :width="`100%`"
            :height="`100%`"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <!-- <el-image style="width:100%; height: 100%" :src="getImageUrl(pageimgList[0].img)" fit="cover"  /> -->
        </div>
        <div class="indexPage-content-boxs-textType1">
          <h1>111</h1>
          <h1>111</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const getImageUrl = (name:any) => {
    console.log( new URL(`${name}`, import.meta.url))
    return new URL(`${name}`, import.meta.url).href
}
interface SetImageValue {
  text:string,
  img:String
}
let pageimgList = ref<SetImageValue[]>([
  {
    text:'测试标题1',
    img:'../../../src/assets/image/Material/page1.jpg'
  },
  {
    text:'测试标题2',
    img:'@/src/assets/image/Material/page1.jpg'
  }
])

</script>
<style lang="scss" scoped>
::deep(.ant-image-img) {
  color:red;
    object-fit: cover;
}
.indexPage {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  &-showPane {
    width: 100%;
    height: $showPane-height;
    // background: url('@/assets/image/background/background.jfif') center/cover;
    background: url('@/assets/image/background/seaBack.jpg') center/cover;
    background-attachment: fixed;
    overflow: hidden;
    position: relative;
    z-index: 0;
    overflow: hidden;
    // animation: hue 10s infinite alternate;
    // &::after {
    //   content: "";
    //   width: 100%;
    //   height: 100%;
    //   background: inherit;
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   z-index: -1;
    //   filter: blur(1rem);
    //   transform: scale(1.15);
    // }
    &-SHOWICON {
      width: 500px;
      height: 93px;
      position: absolute;
      top: 50%;
      left: 50%;
      right: 50%;
      bottom: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      line-height: 93px;
      font-size: 68px;
      color: #fff;
    }
  }
  &-content {
    width: 100%;
    background-color: $bg-color;
    margin-bottom: 1vh;
    &-boxs {
      width: 75%;
      height: 55vh;
      margin-bottom: 1vh;
      margin: 0 auto;
      display: flex;
      background-color: $boxBg-Color;
      &-imgType1 {
        width: 50%;
        height: 100%;
        
      }
    }
  }
  
}

@keyframes hue {
  from {
    filter: hue-rotate(0);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
</style>
