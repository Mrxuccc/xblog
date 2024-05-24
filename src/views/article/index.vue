<template>
    <div class="article">
        <KeepAlive>
          <HeadImageBox tag="article" :title="pageValueList.title" :info="pageValueList.id"></HeadImageBox>
        </KeepAlive>
        <!-- 文章具体内容 -->
        <div class="article-content">
            <div v-html="pageArticle" class="article-content-page"></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
const router = useRoute()
//模拟数据
let pageValueList = ref<{title:any,id:any}>({title:'',id:''})
const pageHeadImg = ref<string>('')
const pageArticle = ref<string>(
    `<h2>新闻1</h2>
    <p>当地时间21日，伊朗总统办公室负责人侯赛因表示，在总统莱希乘坐的直升机发生事故后，
    总统办公室曾试图拨打总统以及外长的手机，但没有人接听。随后，他们拨打了飞行员的手机，
    直升机上的另一个人阿勒·哈希姆接听了电话。他表示，自己掉到了山上，感觉非常不舒服，
    并且不知道自己位置在哪里，也不知道其他人在什么地方。</p>
    <h2>新闻2</h2>
    <p>当地时间21日，伊朗总统办公室负责人侯赛因表示，在总统莱希乘坐的直升机发生事故后，
    总统办公室曾试图拨打总统以及外长的手机，但没有人接听。随后，他们拨打了飞行员的手机，
    直升机上的另一个人阿勒·哈希姆接听了电话。他表示，自己掉到了山上，感觉非常不舒服，
    并且不知道自己位置在哪里，也不知道其他人在什么地方。</p><h2>新闻3</h2>
    <p>当地时间21日，伊朗总统办公室负责人侯赛因表示，在总统莱希乘坐的直升机发生事故后，
    总统办公室曾试图拨打总统以及外长的手机，但没有人接听。随后，他们拨打了飞行员的手机，
    直升机上的另一个人阿勒·哈希姆接听了电话。他表示，自己掉到了山上，感觉非常不舒服，
    并且不知道自己位置在哪里，也不知道其他人在什么地方。</p>`
)
onBeforeMount(()=>{
    pageValueList.value.id = router.query.id
    pageValueList.value.title = router.query.title
})
// console.log(pageValueList.value)

</script>
<style lang="scss" scoped >
@import url('./style/index.scss');
</style>
