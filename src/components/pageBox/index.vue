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
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。
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
            1. 教育部：严禁挤占课间10分钟、严禁教师漠视纵容欺凌。
            2. 三部门：稳妥有序推进57座以上大客车及卧铺客车退出运输市场。
            3. 新冠变异株KP.2多国蔓延，疾控局回应：目前在我国处于极低流行水平。
            4. 中国科学家发现银河系巨大磁环，距银心从6000光年延伸到5万光年。
            5. 上海明确：禁止携带电动自行车或其蓄电池进入电梯。
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
                tagTextList:['SHARK']
            },
        ]
    }
)
props

</script>

<style lang="scss" scoped>
@import url(./style/index.scss);
</style>