<template>
  <div class="app">
    <headerBar></headerBar>
    <router-view ></router-view>
    <footerBar></footerBar>
  </div>
</template>
<script setup lang="ts">
import headerBar from "@/components/pageHead/index.vue";

import footerBar from "@/components/pageFooter/index.vue";
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
