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
      <!-- 个人介绍 -->
      <div class="profile">
        <DispersionGradient width="100%" height="100%">
          <div class="profile-content">
            <el-avatar class="profile-avatar" fit="cover" :size="80" :src="getImageUrl(avatarImg)"></el-avatar>
            <div class="profile-name">
              SHARK
            </div>
            <div class="profile-link">
              <div @click="linkTo('github')">
                <i class="xfont xblog-github"></i>
              </div>
              <el-popover :width="200"
                popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
                <template #reference>
                  <SvgIcon iconName="xblog-weixin" className="xfontSvg"></SvgIcon>
                </template>
                <template #default>
                  <img width="160px" height="160px" :src="getImageUrl(callMe)" alt="" srcset="">
                </template>
              </el-popover>
            </div>
            <div class="profile-valuePanes">
              <div class="profile-valuePanes-box" v-for="(item, index) in showValue" :key="index">
                <div class="profile-valuePanes-box-text">
                  {{ item.name }}
                </div>
                <div class="profile-valuePanes-box-value">
                  {{ item.value }}
                </div>
              </div>
            </div>
          </div>

        </DispersionGradient>
      </div>
      <!-- 内容模块 -->
      <div class="indexPage-content-boxList" :class="{ closeedProfile: isShowAboutme }">
        <PageBox :valueList="pageimgList"></PageBox>
      </div>
    </div>
    <!-- 翻页器 -->
    <LigntButton v-if="!isNoneValue" @click="addInfoPage"></LigntButton>
    <PageNoneBox v-else></PageNoneBox>
  </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/common/ts/common'
import type { SetBoxImageValue } from '@/common/ts/commonInterface'
import { getNewsList } from '@/api/index'
let isNoneValue = ref<boolean>(false)
//测试avatar数据
const avatarImg = ref<string>('../../assets/image/netTextImg/arvator.jpg')
const callMe = ref<string>('../../assets/image/netTextImg/callMeWechart.jpg')
let pageimgList = ref<SetBoxImageValue[]>([])

//判断是否有下一页
const nextPageOf = () => {
  const result = (pageNo.value + 1) * pageSize.value //当前个数
  if (result >= totals.value) {
    isNoneValue.value = true
  } else {
    isNoneValue.value = false
  }
}

// 获取 value 数据
const pageSize = ref<number>(6)
let pageNo = ref<number>(0)
let totals = ref<number>(0)
const getValue = () => {
  getNewsList({
    pageSize: pageSize.value,
    pageNo: pageNo.value
  }).then(res => {
    const { record, total } = res.data
    totals.value = total
    pageimgList.value = record
    // 判断是否有下一页
    nextPageOf()
  })
}
//网站信息
const showValue = ref([
  {
    name: '文章',
    value: 0
  },
  {
    name: '照片',
    value: 0
  },
  {
    name: '访问量',
    value: 0
  }
])

//下一页
const addInfoPage = () => {
  pageNo.value += 1
  getNewsList({
    pageSize: pageSize.value,
    pageNo: pageNo.value
  }).then((res: any) => {
    const record = res.data.record
    pageimgList.value = pageimgList.value.concat(record)
    // 判断是否有下一页
    nextPageOf()

  })
}
let isShowAboutme = ref<boolean>(true) //查看关于我
const aboutMe = () => {
  isShowAboutme.value = !isShowAboutme.value
}
const linkTo = (tag: string) => {
  if (tag == 'github') {
    window.open('https://github.com/Mrxuccc', "_blank")
  }
}

onBeforeMount(() => {
  getValue()
})
</script>
<style lang="scss" scoped>
@import url('./style/index.scss');
</style>
