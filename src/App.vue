<template>
  <div class="app">
    <PageHead></PageHead>
    <router-view ></router-view>
    <BackTop></BackTop>
    <PageFooter></PageFooter>
  </div>
</template>
<script setup lang="ts">
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
