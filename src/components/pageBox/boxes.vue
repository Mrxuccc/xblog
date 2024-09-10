<template>
  <!-- 自定义展示box -->
  <div class="pageBoxsContent">
    <div v-if="index % 2 == 0" class="pageBoxs-imgType1">
      <SvgIcon iconName="xblog-edit_icon_vedio" v-if="val.tag === 'video'" className="xfont"></SvgIcon>
      <img loading="lazy" width="100%" height="100%" :src="getBGImgLink(val.img)" />
    </div>
    <div v-if="index % 2 == 0" class="pageBoxs-text pageBoxs-textType1">
      <div class="pageBoxs-text-time">
        发布于 {{ moment(val.createDate).format("YYYY-MM-DD hh:mm:ss") }}
      </div>
      <h3 class="pageBoxs-text-head">{{ val.text }}</h3>
      <div class="pageBoxs-text-article">
        {{ removeMarkdown(val.info as string) }}
      </div>
      <div class="pageBoxs-text-tag">
        <div v-for="tagIndex in val.tagTextList" :key="tagIndex" class="pageBoxs-text-tag-item">
          {{ tagIndex["tag"] }}
        </div>
      </div>
    </div>
    <div v-if="index % 2 == 1" class="pageBoxs-text pageBoxs-textType2">
      <div class="pageBoxs-text-time">
        发布于 {{ moment(val.createDate).format("YYYY-MM-DD hh:mm:ss") }}
      </div>
      <h3 class="pageBoxs-text-head">{{ val.text }}</h3>
      <div class="pageBoxs-text-article">
        {{ removeMarkdown(val.info as string) }}
      </div>
      <div class="pageBoxs-text-tag">
        <div v-for="tagIndex in val.tagTextList" :key="tagIndex" class="pageBoxs-text-tag-item">
          {{ tagIndex["tag"] }}
        </div>
      </div>
    </div>
    <div v-if="index % 2 == 1" class="pageBoxs-imgType2">
      <SvgIcon iconName="xblog-edit_icon_vedio" v-if="val.tag === 'video'" className="xfont"></SvgIcon>
      <img loading="lazy" width="100%" height="100%" :src="getBGImgLink(val.img)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";
import { getBGImgLink, removeMarkdown } from "@/common/ts/common";
import type { SetBoxImageValue } from "@/common/ts/commonInterface";
const props = withDefaults(
  defineProps<{
    val: SetBoxImageValue,
    index: number
  }>(),
  {
    val: () => {
      return {
        id: "",
        text: "",
        img: "",
        tag: "img",
        info: "",
        tagTextList: ["SHARK"],
        createDate: "2024-05-14 12:34:12",
      }
    },
    index: 0
  }
);
props;

</script>

<style lang="scss" scoped>
@import url(./style/index.scss);

.lastBox {
  margin-bottom: 0 !important;
}
</style>
