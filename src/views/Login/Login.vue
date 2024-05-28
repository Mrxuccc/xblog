<template>
  <!-- 登录注册页面 -->
  <div class="container">
    <div class="welcome">
      <div class="pinkbox"  :style="{transform:`translateX(${pinkboxX}%)`}" >
        <!-- 注册 -->
        <div class="signup " :class="{nodisplay:titleKey=='sign in'}">
          <h1>Register</h1>
          <form  class="more-padding" autocomplete="off">
            <input type="text" placeholder="Username">
            <input type="email" placeholder="Email">
            <input type="password" placeholder="Password">
            <input type="password" placeholder="Confirm Password">
            <button class="button submit">Create Account</button>
          </form>
        </div>

        <!-- 登录 -->
        <div class="signin"  :class="{nodisplay:titleKey=='login'}" >
          <h1>login</h1>
          <form class="more-padding" autocomplete="off">
            <input type="text" placeholder="Username">
            <input type="password" placeholder="Password">
            <div class="checkbox">
              <input type="checkbox" id="remember" /><label for="remember">Remember Me</label>
            </div>
            <button class="buttom sumbit">Login</button>
          </form>
        </div>
      </div>

      <div class="leftbox">
        <h2 class="title"><span>BLOOM</span>&<br>BOUQUET</h2>
        <p class="desc">Pick your perfect <span>bouquet</span></p>
        <img class="flower smaller" src="https://hbimg.huabanimg.com/c09305167a883e60179a45374df73252304001359acca-W3qbYm_fw658/format/webp" />
        <p class="account">您已有账户?</p>
        <button class="button" id="signin" @click="clickLogin">登录</button>
      </div>

      <div class="rightbox">
        <h2 class="title"><span>BLOOM</span>&<br>BOUQUET</h2>
        <p class="desc">Pick your perfect <span>bouquet</span></p>
        <img class="flower" src="https://hbimg.huabanimg.com/b28be92c8198975a74ad656eba00b352c9b9e589819af-lDXUAS_fw658/format/webp" />
        <p class="account">您还没有账户?</p>
        <button class="button" id="signup" @click="clickSignUp()">注册</button>
      </div>
    </div>
  </div>   
</template>

<script setup lang="ts">
const titleKey =ref<string>('login')

let pinkboxX = ref<string|number>(0)
const clickSignUp = ()=>{
  pinkboxX.value = 80
  setTimeout(()=>{
    titleKey.value = 'sign in'
  },600)
}
const clickLogin = ()=>{
  pinkboxX.value = 0
  setTimeout(()=>{
    titleKey.value = 'login'
  },600)
}



</script>
<style lang="scss" scoped>
@import url('./style/index.scss');
</style>
  