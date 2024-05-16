<template>
    <!-- 回到顶部 -->
    <el-backtop :visibility-height="trarkNumber" :bottom="bottomInstance" @mouseover='mouseCondition(true)' @mouseout='mouseCondition(false)'>
        <i class="xfont xblog-backtop1" ></i>
    </el-backtop>
</template>
<script lang="ts" setup>
const trarkNumber = ref<number>(600)
let bottomInstance = ref<number>(100)
const mouseCondition=(key:boolean)=>{
    bottomInstance.value = key?110:100
}
</script>
<style lang="scss" scoped>
.el-backtop {
    height:auto;
    width: auto;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: none;
    font-size: 20px;
    transition: all .3s;
    .xfont {
        font-size: 5rem;
        color: $iconBlue-color;
    }
    &:hover {
        background-color: transparent;
    }
}
</style>