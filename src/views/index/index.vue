<template>
  <!-- 首页 -->
  <div class="indexPage">
    <div class="indexPage-showPane">
      <div class="indexPage-showPane-SHOWICON">
        LONELY SHARK
      </div>
    </div>
    <div class="indexPage-content">
      <PageBox :valueList="pageimgList"></PageBox>
      <LigntButton v-if="!isNoneValue" @click="addInfoPage"></LigntButton>
      <div v-else class="indexPage-content-noneValue">~~到底啦~~</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {SetBoxImageValue} from '@/assets/ts/commonInterface.ts'
let isNoneValue = ref<boolean>(false)
let pageimgList = ref<SetBoxImageValue[]>([
  {
    text:'东京街头',
    img:'../../../src/assets/image/Material/page1.jpg',
    tag:'img',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK','测试']
  },
  {
    text:'落日风车田',
    img:'../../../src/assets/image/Material/page2.jpg',
    tag:'img',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK','测试']
  },
  {
    text:'测试标题3',
    img:'../../../src/assets/image/Material/page3.jpg',
    tag:'img',
    info:`测试标题`,
    tagTextList:['SHARK']
  },
  {
    text:'测试标题4',
    img:'../../../src/assets/image/Material/page4.jpg',
    tag:'img',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK']
  },
  {
    text:'测试标题5',
    img:'../../../src/assets/image/Material/page5.jpg',
    tag:'img',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK']
  },
  {
    text:'测试标题6',
    img:'../../../src/assets/image/Material/page6.jpg',
    tag:'img',
    info:`测试文章`,
    tagTextList:['SHARK']
  }
])
const addInfoPage = ()=>{ //下一页
  let fakeValueList:SetBoxImageValue[] = [{
    text:'东京街头',
    img:'../../../src/assets/image/Material/page1.jpg',
    tag:'img',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK','测试']
  },
  {
    text:'落日风车田',
    img:'../../../src/assets/image/Material/page2.jpg',
    tag:'img',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK','测试']
  },
  {
    text:'测试标题3',
    img:'../../../src/assets/image/Material/page3.jpg',
    tag:'img',
    info:`测试标题`,
    tagTextList:['SHARK']
  },
  {
    text:'测试标题4',
    img:'../../../src/assets/image/Material/page4.jpg',
    tag:'img',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK']
  },
  {
    text:'测试标题5',
    img:'../../../src/assets/image/Material/page5.jpg',
    tag:'img',
    info:`
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。`,
    tagTextList:['SHARK']
  },
  {
    text:'测试标题6',
    img:'../../../src/assets/image/Material/page6.jpg',
    tag:'img',
    info:`测试文章`,
    tagTextList:['SHARK']
  }]
  pageimgList.value= pageimgList.value.concat(fakeValueList)
}

</script>
<style lang="scss" scoped>
@import url('./style/index.scss');
</style>
