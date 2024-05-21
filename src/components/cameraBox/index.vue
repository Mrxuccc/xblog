<template>
    <!-- 自定义展示box -->
    <div class="cameraBoxs" :class="{lastBox:index===valueList.length-1}" v-for="(item,index) in valueList" :key="index">
        
    </div>
</template>

<script setup lang="ts">
import { getImageUrl } from '@/assets/ts/common.ts'
import type {SetBoxImageValue} from '@/assets/ts/commonInterface.ts'

const props = withDefaults(
    defineProps<{
        valueList:SetBoxImageValue[]
    }>(),
    {
        valueList:()=>[
            {
                text:'',
                img:'',
                tag:'img',
                info:'',
                tagTextList:['SHARK'],
            },
        ]
    }
)
props

</script>

<style lang="scss" scoped>
@import url(./style/index.scss);
.lastBox {
  margin-bottom: 0 !important;
}
</style>