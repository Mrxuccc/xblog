<template>
  <div :id="`pageBoxs-${index}`" class="pageBoxs " :class="{ lastBox: index === valueList.length - 1 }"
    v-for="(item, index) in valueList" @click="toArticlePage(item)" :key="index">
    <boxes :lazy="true" :val="item" :index="index"></boxes>
  </div>
</template>

<script setup lang="ts">
import boxes from './boxes.vue'
import { useRouter } from "vue-router";
const router = useRouter();
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
