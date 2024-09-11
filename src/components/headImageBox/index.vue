<template>
  <div ref="ImgArticle" class="topImgBanner" :class="{
    'topImgBanner-articleHeight': tag != 'normal',
    'topImgBanner-radomBg': tag == 'normal',
  }">
    <!-- 文章页 -->
    <div v-if="tag != 'article'" class="topImgBanner-title">
      <!-- 未完成 -->
      <slot name="titleCenter">
        爱才应该是刺中好人的唯一的剑，是恶人能佩上的唯一的花。
      </slot>
    </div>
    <!-- 首页 -->
    <div v-else class="topImgBanner-articleTitle">
      <div class="topImgBanner-articleTitle-title">
        {{ title }}
      </div>
      <div class="topImgBanner-articleTitle-info">
        {{ info }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { getBGImgLinkUrl, addClasses } from "@/common/ts/common";
import { headBackStore } from '@/store/headBackStore'
const router = useRouter();
//数据传入
const props = withDefaults(
  defineProps<{
    tag: "article" | "normal";
    title: string;
    info: any;
    imgs: string;
  }>(),
  {
    tag: "normal",
    title: "",
    info: "",
    imgs: "/images/headBack/page1.jpg",
  }
);
props;

//tag=article
let imageArticle = computed(() => {
  return getBGImgLinkUrl(props.imgs);
});

//tag==normal
let normalImage = ref("src/assets/image/background/seaBack.jpg");

//随机背景图片
let randomBackground = () => {
  normalImage.value = getBGImgLinkUrl(
    headBackStore().headImgList[Math.floor(Math.random() * headBackStore().headImgList.length)]
  );
};
//获取元素
const ImgArticle = ref<HTMLElement | null>(null)

const addClass = () => {
  addClasses(ImgArticle.value, ['animate__fadeInDown', 'animate__animated']);
}
onMounted(() => {
  addClass();
})
watch(
  () => router.currentRoute.value.path,
  () => {
    if (props.tag == "normal") {
      randomBackground();
      addClass();
    }
  },
  { immediate: true, deep: true },
);
</script>

<style lang="scss" scoped>
.topImgBanner {
  &-radomBg {
    background-image: v-bind(normalImage);
  }

  &-articleHeight {
    height: $article-height;
    background-image: v-bind(imageArticle);
  }
}

@import url("./style/index.scss");
</style>