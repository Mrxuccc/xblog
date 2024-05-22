<template>
  <!-- 首页 -->
  <div class="indexPage">
    <div class="indexPage-showPane">
      <div class="indexPage-showPane-SHOWICON">
        LONELY SHARK
      </div>
    </div>
    <!-- 内容 -->
    <div class="indexPage-content">
      <!-- btn -->
      <div class="indexPage-content-aboutMe" @click="aboutMe">
        <i :class="{routeY:isShowAboutme}" class="xfont xblog-app_icon_about_me"></i> 
      </div>
      <!-- 个人介绍 -->
      <Transition name="avator-fade">
        <div v-if="isShowAboutme" class="profile" >
          <el-avatar class="profile-avatar"  fit="cover"  :size="80" :src="getImageUrl(avatarImg)" ></el-avatar>
          <div  class="profile-name">
            SHARK
          </div>
          <div class="profile-link">
            <div @click="linkTo('github')">
              <i class="xfont xblog-github"></i>
            </div>
            <el-popover
              :width="200"
              popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
            >
              <template #reference>
                <SvgIcon iconName="xblog-weixin" className="xfontSvg"></SvgIcon>
              </template>
              <template #default>
                <img width="160px" height="160px" :src="getImageUrl(callMe)" alt="" srcset="">
              </template>
            </el-popover>
          </div>
          <div class="profile-valuePanes">
            <div class="profile-valuePanes-box" v-for="(item,index) in showValue" :key="index">
              <div class="profile-valuePanes-box-text">
                {{ item.name }}
              </div>
              <div class="profile-valuePanes-box-value">
                {{ item.value }}
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <!-- infoBox -->
      <div class="indexPage-content-boxList" :class = "{closeedProfile: isShowAboutme}">
        <PageBox :valueList="pageimgList"></PageBox>
      </div>
    </div>
    <!-- 翻页器 -->
    <LigntButton v-if="!isNoneValue" @click="addInfoPage"></LigntButton>
    <PageNoneBox v-else></PageNoneBox>
  </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/assets/ts/common.ts'
import type {SetBoxImageValue} from '@/assets/ts/commonInterface.ts'
let isNoneValue = ref<boolean>(false)
//测试avatar数据
const avatarImg = ref<string>('../../assets/image/netTextImg/arvator.jpg')
const callMe = ref<string>('../../assets/image/netTextImg/callMeWechart.jpg')
let pageimgList = ref<SetBoxImageValue[]>([
  {
    id:'1231',
    text:'东京街头',
    img:'../../../src/assets/image/Material/page1.jpg',
    tag:'img',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK','测试'],
    date:'2024-05-14 12:34:12'
  },
  {
    id:'1231',
    text:'落日风车田',
    img:'../../../src/assets/image/Material/page2.jpg',
    tag:'video',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK','测试'],
    date:'2024-05-14 12:34:12'
  },
  {
    id:'1231',
    text:'测试标题3',
    img:'../../../src/assets/image/Material/page3.jpg',
    tag:'img',
    info:`测试标题`,
    tagTextList:['SHARK'],
    date:'2024-05-14 12:34:12'
  },
  {
    id:'1231',
    text:'测试标题4',
    img:'../../../src/assets/image/Material/page4.jpg',
    tag:'img',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK'],
    date:'2024-05-14 12:34:12'
  },
  {
    id:'1231',
    text:'测试标题5',
    img:'../../../src/assets/image/Material/page5.jpg',
    tag:'img',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK'],
    date:'2024-05-14 12:34:12'
  },
  {
    id:'1231',
    text:'测试标题6',
    img:'../../../src/assets/image/Material/page6.jpg',
    tag:'img',
    info:`测试文章`,
    tagTextList:['SHARK'],
    date:'2024-05-14 12:34:12'
  }
])

//网站信息
const showValue = ref([
  {
    name:'文章',
    value:0
  },
  {
    name:'照片',
    value:0
  },
  {
    name:'访问量',
    value:0
  }
])


const addInfoPage = ()=>{ //下一页
  let fakeValueList:SetBoxImageValue[] = [{
    id:'1231',
    text:'东京街头',
    img:'../../../src/assets/image/Material/page1.jpg',
    tag:'img',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK','测试'],
    date:'2024-05-14 12:34:12'
  },
  {
    id:'1231',
    text:'落日风车田',
    img:'../../../src/assets/image/Material/page2.jpg',
    tag:'img',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK','测试'],
    date:'2024-05-14 12:34:12'
  },
  {
    id:'1231',
    text:'测试标题3',
    img:'../../../src/assets/image/Material/page3.jpg',
    tag:'img',
    info:`测试标题`,
    tagTextList:['SHARK'],
    date:'2024-05-14 12:34:12'
  },
  {
    id:'1231',
    text:'测试标题4',
    img:'../../../src/assets/image/Material/page4.jpg',
    tag:'img',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK'],
    date:'2024-05-14 12:34:12'
  },
  {
    id:'1231',
    text:'测试标题5',
    img:'../../../src/assets/image/Material/page5.jpg',
    tag:'img',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK'],
    date:'2024-05-14 12:34:12'
  },
  {
    id:'1231',
    text:'测试标题6',
    img:'../../../src/assets/image/Material/page6.jpg',
    tag:'img',
    info:`测试文章`,
    tagTextList:['SHARK'],
    date:'2024-05-14 12:34:12'
  }]
  pageimgList.value= pageimgList.value.concat(fakeValueList)
}
let isShowAboutme = ref<boolean>(false) //查看关于我
const aboutMe = ()=>{
  isShowAboutme.value = !isShowAboutme.value
}
const linkTo =(tag:string)=>{
  if(tag=='github') {
    window.open('https://github.com/Mrxuccc',"_blank")
  }
}
</script>
<style lang="scss" scoped>
@import url('./style/index.scss');
</style>
