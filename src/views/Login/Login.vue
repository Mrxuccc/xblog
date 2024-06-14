<template>
  <!-- 登录注册页面 -->
  <div class="container">
    <div class="welcome">
      <div class="pinkbox"  :style="{transform:`translateX(${pinkboxX}%)`}" >
        <!-- 登录 -->
        <div class="signin"  :class="{nodisplay:titleKey=='signin'}" >
          <h1>登录</h1>
          <el-form class="more-padding" :model="Loginform">
            <el-form-item >
              <el-input type="text" placeholder="用户名" v-model="Loginform.username" />
            </el-form-item>
            <el-form-item >
              <el-input type="password" v-model="Loginform.password" placeholder="密码" />
            </el-form-item>
            <!-- <div class="checkbox">
              <input type="checkbox" id="remember" /><label for="remember">记住密码</label>
            </div> -->
            <button type="button" class="buttom sumbit" @click="toLogin">登录</button>
          </el-form>
          
        </div>
        <!-- 注册 -->
        <div class="signup " :class="{nodisplay:titleKey=='signup'}">
          <h1>注册</h1>
          <el-form class="more-padding" :model="registerForm">
            <el-form-item >
              <el-input type="text" placeholder="用户名" v-model="registerForm.username" />
            </el-form-item>
            <el-form-item >
              <el-input type="email" placeholder="邮箱" v-model="registerForm.email" />
            </el-form-item>
            <el-form-item >
              <el-input type="password" placeholder="密码" v-model="registerForm.password" />
            </el-form-item>
            <el-form-item >
              <el-input type="password" v-model="registerForm.checkPassword" placeholder="确认密码" />
            </el-form-item>
            <button type="button" class="buttom sumbit" @click="toRegister()">创建账户</button>
          </el-form>
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
import {Login,Register} from '@/api/login'
import type { LoginType } from'@/common/ts/commonInterface'
import {getEncrypt} from '@/common/bcryptjs/bcryptjs'
import {getPublicKey} from '@/api/login'
import { userStore } from '../../store/userStore'

const Loginform = reactive<{username:string,password:string}>({
  username:'',
  password:''
})
const registerForm = reactive<LoginType>({
  username:'',
  password:'',
  checkPassword:'',
  email:''
})

const toRegister = () =>{
  Register(registerForm).then(res=>{
    console.log(res)
  })
}

const toLogin = ()=>{
  getPublicKey().then((res:any)=>{
    if(!getEncrypt(res.data,Loginform.password) as boolean) {
      console.log('登录失败')
      return
    }
    Loginform.password = getEncrypt(res.data,Loginform.password) as string
    Login(Loginform).then((result:any)=>{
      console.log(result)
      const {token  ,userInfo} = result.data
      userStore().updateToken(token)
      userStore().updateUserInfo(userInfo)
      console.log()
    })
  })
  
}




const titleKey =ref<string>('signup')

let pinkboxX = ref<string|number>(0)
const clickSignUp = ()=>{
  pinkboxX.value = 80
  Loginform.password = ''
  Loginform.username = ''
  setTimeout(()=>{
    titleKey.value = 'signin'
  },600)
}
const clickLogin = ()=>{
  registerForm.password = ''
  registerForm.username = ''
  registerForm.checkPassword = ''
  registerForm.email = ''
  pinkboxX.value = 0
  setTimeout(()=>{
    titleKey.value = 'signup'
  },600)
}

</script>
<style lang="scss" scoped>
@import url('./style/index.scss');
</style>
  