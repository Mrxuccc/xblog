<template>
    <div class="share">
      <KeepAlive>
        <HeadImageBox></HeadImageBox>
      </KeepAlive>
      <div class="share-content" >
        <div class="share-content-boxList">
          <shareBox :valueList="showInfoList"></shareBox>
          <!-- 翻页器 -->
          <LigntButton v-if="!isNoneValue" @click="addInfoPage"></LigntButton>
          <PageNoneBox v-else></PageNoneBox>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
import shareBox from './component/shareBox/index.vue'
import type {setShareInfoType} from '@/assets/ts/commonInterface.ts'
let isNoneValue = ref<boolean>(false)
let showInfoList = ref<setShareInfoType[]>([
  {
    id:'12345',
    userName:'shark',
    releaseTime:'2024-5-22 19:29:90',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    avatarImg:'../../assets/image/netTextImg/arvator.jpg',
    showImg:['../../assets/image/Material/page10.jpg'],
    commentNumber:0
  },
  {
    id:'2312',
    userName:'shark',
    releaseTime:'2024-5-21 19:29:90',
    info:'xxxxxxxxxxxxxx',
    avatarImg:'../../assets/image/netTextImg/arvator.jpg',
    showImg:['../../assets/image/Material/page5.jpg'],
    commentNumber:0
  },
  {
    id:'5432',
    userName:'shark',
    releaseTime:'2024-5-20 19:29:90',
    info:'xxxxxxxxxxxxxx',
    avatarImg:'../../assets/image/netTextImg/arvator.jpg',
    showImg:['../../assets/image/Material/page8.jpg'],
    commentNumber:0
  }
])
const addInfoPage=()=>{
  console.log('1232123')
  let list:setShareInfoType[] = [
    {
      id:'12345',
      userName:'shark',
      releaseTime:'2024-5-22 19:29:90',
      info:`
              1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
              2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
              3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
              4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
              5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
      avatarImg:'../../assets/image/netTextImg/arvator.jpg',
      showImg:['../../assets/image/Material/page10.jpg'],
      commentNumber:0
    },
    {
    id:'2312',
    userName:'shark',
    releaseTime:'2024-5-21 19:29:90',
    info:'xxxxxxxxxxxxxx',
    avatarImg:'../../assets/image/netTextImg/arvator.jpg',
    showImg:['../../assets/image/Material/page10.jpg'],
    commentNumber:0
    },
    {
    id:'5432',
    userName:'shark',
    releaseTime:'2024-5-20 19:29:90',
    info:'xxxxxxxxxxxxxx',
    avatarImg:'../../assets/image/netTextImg/arvator.jpg',
    showImg:['../../assets/image/Material/page10.jpg'],
    commentNumber:0
    }
  ]
  list.map(_=>{
    showInfoList.value.push(_)
  })
}
</script>

<style lang="scss" scoped>
@import url(./style/index.scss);
</style>