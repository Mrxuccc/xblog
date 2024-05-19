<template>
    <footer class="footer">
      <div class="footer-poet" >海月破圆影，菰蒋生绿池。</div>
      <div class="footer-text">2024/05/14 | 本网站由 <a href="#top">shark</a> 强力支持</div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
  text-align: center;
  background: linear-gradient(-90deg,#ee7752,#e73c7e,#23a6d5,#23d5ab);
  background-size: 300% 300%;
  border-radius: 1.5rem 1.5rem 0 0;
  -webkit-animation: gradientbg 10s ease infinite;
  &-poet {
    padding-top: 10px;
    font-size: 16px;
    color: #fff;
  }
  &-text {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 13px;
    color: #595a5a;
    
  }
}

// 页面跳转链接
a {
  cursor: pointer;
  text-decoration: none !important;
}
a:visited {
  color: #595a5a !important;
  text-decoration: none !important;
}
a:hover {
  color: $--linkHoverColor !important;
}

@keyframes gradientbg {
  0% {
    background-position: 0 50%;
  }
  50% {
      background-position: 100% 50%;
  }
  100% {
      background-position: 0 50%;
  }
}
</style>