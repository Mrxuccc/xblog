<template>
    <!-- 回到顶部 -->
    <el-backtop :visibility-height="trarkNumber" :bottom="bottomInstance" @mouseover='mouseCondition(true)' @mouseout='mouseCondition(false)'>
        <i class="iconfont icon-backTop" ></i>
    </el-backtop>
</template>
<script lang="ts" setup>
const trarkNumber = ref<number>(600)
let bottomInstance = ref<number>(100)
const mouseCondition=(key:boolean)=>{
    bottomInstance.value = key?110:100
}
</script>
<style lang="less" scoped>
.el-backtop {
    height:auto;
    width: auto;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: none;
    font-size: 20px;
    transition: all .3s;
    .iconfont {
        font-size: 5rem;
        color: rgba(73, 177, 245, 1);
    }
    &:hover {
        background-color: transparent;
    }
}
</style>