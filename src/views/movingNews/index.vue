<template>
  <!-- 动态 -->
  <div class="news">
    <KeepAlive>
      <HeadImageBox></HeadImageBox>
    </KeepAlive>
    <!-- 内容 -->
    <div class="news-content">
      <!-- infoBox -->
      <div class="news-content-boxList" >
        <PageBox :valueList="pageimgList"></PageBox>
      </div>
    </div>
    <!-- 翻页器 -->
    <LigntButton v-if="!isNoneValue" @click="addInfoPage"></LigntButton>
    <PageNoneBox v-else></PageNoneBox>
  </div>
</template>

<script setup lang="ts">
import type {SetBoxImageValue} from '@/common/ts/commonInterface'
import {getNewsList} from '@/api/index'
let isNoneValue = ref<boolean>(false)
let pageimgList = ref<SetBoxImageValue[]>([])
//判断是否有下一页
const nextPageOf=()=>{
  const result = (pageNo.value + 1)*pageSize.value //当前个数
    if(result >= totals.value){ 
      isNoneValue.value = true
    }else {
      isNoneValue.value = false
    }
}

// 获取 value 数据
const pageSize = ref<number>(6)
let pageNo = ref<number>(0)
let totals = ref<number>(0)
const getValue = ()=>{
  getNewsList({
    pageSize:pageSize.value,
    pageNo:pageNo.value
  }).then(res=>{
    const {record,total} = res.data
    totals.value = total
    pageimgList.value = record
    // 判断是否有下一页
    nextPageOf()
  })
}
//下一页
const addInfoPage = ()=>{ 
  pageNo.value += 1
  getNewsList({
    pageSize:pageSize.value,
    pageNo:pageNo.value
  }).then(res=>{
    const record = res.data.record
    pageimgList.value= pageimgList.value.concat(record)
    // 判断是否有下一页
    nextPageOf()
    
  })
}
onBeforeMount(() => {
  getValue()
})
</script>
<style lang="scss" scoped>
@import url('./style/index.scss');
</style>
  