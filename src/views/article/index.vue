<template>
    <div class="article">
        <KeepAlive>
          <HeadImageBox></HeadImageBox>
        </KeepAlive>
        <div class="article-content">
            <div class="article-content-page">
                {{ pageArticle }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const pageArticle = ref<string>(
    `当地时间21日，伊朗总统办公室负责人侯赛因表示，在总统莱希乘坐的直升机发生事故后，总统办公室曾试图拨打总统以及外长的手机，但没有人接听。随后，他们拨打了飞行员的手机，直升机上的另一个人阿勒·哈希姆接听了电话。他表示，自己掉到了山上，感觉非常不舒服，并且不知道自己位置在哪里，也不知道其他人在什么地方。

`
)
console.log(router)

</script>
<style lang="scss" scoped >
@import url('./style/index.scss');
</style>
