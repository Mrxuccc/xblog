<template>
  <!-- 首页 -->
  <div class="indexPage">
    <div class="indexPage-showPane">
      <div class="indexPage-showPane-SHOWICON">
        LONELY SHARK
      </div>
    </div>
    <div class="indexPage-content">
      <div class="indexPage-content-boxs">

      </div>
      <div class="indexPage-content-boxs">

      </div>
      <div class="indexPage-content-boxs">

      </div>
      <div class="indexPage-content-boxs">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
    &-boxs {
      margin: 0 auto;
      width: 75%;
      height: 55vh;
      margin-bottom: 1vh;
      background-color: $boxBg-Color;
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
