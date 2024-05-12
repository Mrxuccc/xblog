<template>
  <!-- 首页 -->
  <div class="indexPage">
    <div class="indexPage-showPane">
    </div>
    <div class="indexPage-content">
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
    height: 100vh;
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
  }
  &-content {
    width: calc(1980px + 2* var(--layout-padding));
    height: 100vh;
    margin: 0 auto;
    padding: 0 var(--layout-padding);
    &-boxs {
      width: 75vw;
      height: 50vh;
      background-color: #dbcbcb;
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
