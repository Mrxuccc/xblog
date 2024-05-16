<template>
    <div id="lineLightBtn" class="button-nextPage" @mousemove="handleMove($event)" >
      <div>
        <slot>
          下一页
        </slot>
      </div>
    </div>
</template>

<script lang="ts" setup>
let btnMoveValue = ref({
  xs:`0`,
  ys:`0`
})
const handleMove=(e:any) =>{
  btnMoveValue.value.xs = e.offsetX +'px'
  btnMoveValue.value.ys = e.offsetY+'px'
}
</script>

<style lang="scss" scoped>

@import url('./style/index.scss');
#lineLightBtn::before {
  top: v-bind('btnMoveValue.ys') !important;
  left: v-bind('btnMoveValue.xs') !important;
}
</style>