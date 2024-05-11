<template>
  <div class="app">
    <header class="header">
      <div>
        home
      </div>
    </header>
    <router-view ></router-view>
    <footer class="footer"></footer>
  </div>
</template>

<style lang="less"  scoped>
.app {
  position: relative;
  min-height: 100vh;
  max-width: 2560px;
  margin: 0 auto;
  overflow: hidden;
}
.header {
  position: absolute;
  top: 0;
  z-index: 1002;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  max-width: 2560px;
  width: 100%;
  height: 64px;
}
</style>
