<template>
  <!-- 自定义展示box -->
  <div class="pageBoxs" :class="{ lastBox: index === valueList.length - 1 }" v-for="(item, index) in valueList"
    @click="toArticlePage(item)" :key="index">
    <div v-if="index % 2 == 0" class="pageBoxs-imgType1">
      <SvgIcon iconName="xblog-edit_icon_vedio" v-if="item.tag === 'video'" className="xfont"></SvgIcon>
      <img loading="lazy" decoding="async" width="100%" height="100%" :src="getBGImgLink(item.img)" />
    </div>
    <div v-if="index % 2 == 0" class="pageBoxs-text pageBoxs-textType1" @click="toArticlePage(item)">
      <div class="pageBoxs-text-time">
        发布于 {{ moment(item.createDate).format("YYYY-MM-DD hh:mm:ss") }}
      </div>
      <h3 class="pageBoxs-text-head">{{ item.text }}</h3>
      <div class="pageBoxs-text-article">
        {{ removeMarkdown(item.info as string) }}
      </div>
      <div class="pageBoxs-text-tag">
        <div v-for="tagIndex in item.tagTextList" :key="tagIndex" class="pageBoxs-text-tag-item">
          {{ tagIndex["tag"] }}
        </div>
      </div>
    </div>
    <div v-if="index % 2 == 1" class="pageBoxs-text pageBoxs-textType2" @click="toArticlePage(item)">
      <div class="pageBoxs-text-time">
        发布于 {{ moment(item.createDate).format("YYYY-MM-DD hh:mm:ss") }}
      </div>
      <h3 class="pageBoxs-text-head">{{ item.text }}</h3>
      <div class="pageBoxs-text-article">
        {{ removeMarkdown(item.info as string) }}
      </div>
      <div class="pageBoxs-text-tag">
        <div v-for="tagIndex in item.tagTextList" :key="tagIndex" class="pageBoxs-text-tag-item">
          {{ tagIndex["tag"] }}
        </div>
      </div>
    </div>
    <div v-if="index % 2 == 1" class="pageBoxs-imgType2">
      <SvgIcon iconName="xblog-edit_icon_vedio" v-if="item.tag === 'video'" className="xfont"></SvgIcon>
      <img loading="lazy" decoding="async" width="100%" height="100%" :src="getBGImgLink(item.img)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";
import { useRouter } from "vue-router";
const router = useRouter();
// import { articleStore } from "@/store/articleStore";
import { getBGImgLink, removeMarkdown } from "@/common/ts/common";
import type { SetBoxImageValue } from "@/common/ts/commonInterface";
const props = withDefaults(
  defineProps<{
    valueList: SetBoxImageValue[];
  }>(),
  {
    valueList: () => [
      {
        id: "",
        text: "",
        img: "",
        tag: "img",
        info: "",
        tagTextList: ["SHARK"],
        createDate: "2024-05-14 12:34:12",
      },
    ],
  }
);
props;

const toArticlePage = (e: SetBoxImageValue) => {
  router.push({
    path: "/article",
    query: { id: e.id },
  });
};
</script>

<style lang="scss" scoped>
@import url(./style/index.scss);

.lastBox {
  margin-bottom: 0 !important;
}
</style>
