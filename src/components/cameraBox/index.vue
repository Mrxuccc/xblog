<template>
    <!-- 自定义展示box -->
    <div class="cameraBoxs" :class="{lastBox:index===valueList.length-1}" v-for="(item,index) in valueList" :key="index">
        <a-image
            :width="`94%`"
            :height="`82%`"
            :src="item.img?getImageUrl(item.img):null"
        />
        <div class="cameraBoxs-text">
          {{ item.text }}
        </div>
        <div class="cameraBoxs-date">
          {{ item.date }}
        </div>
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
                date:'2024-05-14 12:34:12'
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