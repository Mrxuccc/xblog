<template>
    <!-- 自定义展示box -->
    <div class="pageBoxs" :class="{lastBox:index===valueList.length-1}" v-for="(item,index) in valueList" @click="toArticlePage(item)" :key="index">
        <div v-if="index%2==0" class="pageBoxs-imgType1">
          <a-image
            :width="`100%`"
            :height="`100%`"
            :src="item.img?getImageUrl(item.img):null"
          />
        </div>
        <div v-if="index%2==0" class="pageBoxs-text pageBoxs-textType1"  @click="toArticlePage(item)">
          <div class="pageBoxs-text-time">发布于{{ item.date }}</div>
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
        <div v-if="index%2==1" class="pageBoxs-text pageBoxs-textType2"  @click="toArticlePage(item)">
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
import { useRouter } from 'vue-router';
const router = useRouter()
import { getImageUrl } from '@/common/ts/common.ts'
import type {SetBoxImageValue} from '@/common/ts/commonInterface.ts'
const props = withDefaults(
    defineProps<{
        valueList:SetBoxImageValue[]
    }>(),
    {
        valueList:()=>[
            {
                id:'',
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

const toArticlePage=(e:object)=> {
  router.push({
    path:'/article',
    params:{...e}
  })
}

</script>

<style lang="scss" scoped>
@import url(./style/index.scss);
.lastBox {
  margin-bottom: 0 !important;
}
</style>