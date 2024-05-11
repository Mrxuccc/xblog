<template>
  <!-- 首页 -->
  <div class="indexPage">
  </div>
</template>

<script setup lang="ts">

</script>
<style lang="scss" scoped>

.indexPage {
  width: 100%;
  height: 50vh;
  background: url('@/assets/image/background/background.jfif') center/cover;
  position: relative;
  z-index: 0;
  overflow: hidden;
  animation: hue 10s infinite alternate;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(2rem);
    transform: scale(1.15);
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
