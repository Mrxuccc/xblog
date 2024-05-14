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
      <div  class="indexPage-content-boxs" v-for="(item,index) in pageimgList" :key="index">
        <div v-if="index%2==0" class="indexPage-content-boxs-imgType1">
          <a-image
            :width="`100%`"
            :height="`100%`"
            :src="getImageUrl(item.img)"
          />
        </div>
        <div v-if="index%2==0" class="indexPage-content-boxs-text indexPage-content-boxs-textType1">
          <div class="indexPage-content-boxs-text-head">{{ item.text }}</div>
          <div>发布于 2024-05-14 12：34：12</div>
        </div>
        <div v-if="index%2==1" class="indexPage-content-boxs-text indexPage-content-boxs-textType2">
          <div class="indexPage-content-boxs-text-head">{{ item.text }}</div>
          <div>发布于 2024-05-14 12：34：12</div>
        </div>
        <div v-if="index%2==1" class="indexPage-content-boxs-imgType2">
          <a-image
            :width="`100%`"
            :height="`100%`"
            :src="getImageUrl(item.img)"
          />
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
  img:String,
  tag:'img'|'video' //图片img,视频video
}
let pageimgList = ref<SetImageValue[]>([
  {
    text:'东京街头',
    img:'../../../src/assets/image/Material/page1.jpg',
    tag:'img'
  },
  {
    text:'落日风车田',
    img:'../../../src/assets/image/Material/page2.jpg',
    tag:'img'
  },
  {
    text:'测试标题3',
    img:'../../../src/assets/image/Material/page3.jpg',
    tag:'img'
  },
  {
    text:'测试标题4',
    img:'../../../src/assets/image/Material/page4.jpg',
    tag:'img'
  },
  {
    text:'测试标题5',
    img:'../../../src/assets/image/Material/page5.jpg',
    tag:'img'
  },
  {
    text:'测试标题6',
    img:'../../../src/assets/image/Material/page6.jpg',
    tag:'img'
  }
])

</script>
<style lang="scss" scoped>

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
    background: url('@/assets/image/background/seaBack.jpg') center/cover;
    background-attachment: fixed;
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-bottom: 2vh;
    overflow: hidden;
    // background: url('@/assets/image/background/background.jfif') center/cover;
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
      height: 45vh;
      margin: 0 auto;
      margin-bottom: 2vh;
      display: flex;
      align-items: center;
      border-radius: 8px;
      box-shadow: 1px 1px 14px rgba(128, 128, 128, 0.5);
      &:hover {
        box-shadow: 1px 1px 14px rgba(128, 128, 128, 0.8);  
      }
      &-imgType1 {
        width: 50%;
        height: 100%;
        :deep(.ant-image-img) {
          border-radius: 8px 0 0 8px;
          object-fit: cover;
        }
      }
      &-textType1 {
        width: 50%;
        height: 90%;
        color: #000;
      }
      &-imgType2 {
        width: 50%;
        height: 100%;
        :deep(.ant-image-img) {
          border-radius: 0  8px 8px 0 ;
          object-fit: cover;
        }
      }
      &-textType2 {
        width: 50%;
        height: 90%;
        color: #000;
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
