<template>
    <!-- 自定义展示box -->
    <div  class="pageBoxs" v-for="(item,index) in valueList" :key="index">
        <div v-if="index%2==0" class="pageBoxs-imgType1">
          <a-image
            :width="`100%`"
            :height="`100%`"
            :src="item.img?getImageUrl(item.img):null"
          />
        </div>
        <div v-if="index%2==0" class="pageBoxs-text pageBoxs-textType1">
          <div class="pageBoxs-text-time">发布于 2024-05-14 12:34:12</div>
          <h3 class="pageBoxs-text-head">{{ item.text }}</h3>
          <div class="pageBoxs-text-article">
            {{ item.info }}
          </div>
          <div class="pageBoxs-text-tag">
            <div v-for="tagIndex in item.tagTextList" :key="tagIndex" class="pageBoxs-text-tag-item">
              {{ tagIndex }}
            </div>
          </div>
        </div>
        <div v-if="index%2==1" class="pageBoxs-text pageBoxs-textType2">
          <div class="pageBoxs-text-time">发布于 2024-05-14 12:34:12</div>
          <h3 class="pageBoxs-text-head">{{ item.text }}</h3>
          <div class="pageBoxs-text-article">
            {{ item.info }}
          </div>
          <div class="pageBoxs-text-tag">
            <div v-for="tagIndex in item.tagTextList" :key="tagIndex" class="pageBoxs-text-tag-item">
              {{ tagIndex }}
            </div>
          </div>
        </div>
        <div v-if="index%2==1" class="pageBoxs-imgType2">
          <a-image
            :width="`100%`"
            :height="`100%`"
            :src="getImageUrl(item.img)"
          />
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
            },
        ]
    }
)
props

</script>

<style lang="scss" scoped>
@import url(./style/index.scss);
</style>