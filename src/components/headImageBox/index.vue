<template>
    <div class="topImgBanner" :class="{'topImgBanner-articleHeight':tag!='normal','topImgBanner-radomBg':tag=='normal'}">
        <div v-if="tag!='article'" class="topImgBanner-title">
            <slot name="titleCenter">
                爱才应该是刺中好人的唯一的剑，是恶人能佩上的唯一的花。
            </slot>
        </div>
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
import {useRouter} from 'vue-router'
const router = useRouter()
//数据传入
const props = withDefaults(
    defineProps<{
        tag:'article'|'normal',
        title:string,
        info:any,
        imgs:string
    }>(),
    {
        tag:'normal',
        title:'',
        info:'',
        imgs:'@/assets/image/Material/page1.jpg'

    }
)
props

//tag=article
let imageArticle = computed(()=>{
    let linkString = getBGImgLinkUrl(props.imgs)
    return 'url(' + linkString + ')'
})


//tag==normal
let normalImage = ref("url('src/assets/image/background/seaBack.jpg')")
//随机背景图片
// 后续背景图片数据需要预加载
let randomBackground = ()=>{
    const images = [
        '@/assets/image/Material/page1.jpg',
        '@/assets/image/Material/page2.jpg',
        '@/assets/image/Material/page3.jpg',
        '@/assets/image/Material/page4.jpg',
        '@/assets/image/Material/page5.jpg',
        '@/assets/image/Material/page6.jpg',
    ]
    normalImage.value = 'url(' +  getBGImgLinkUrl(images[Math.floor(Math.random()*images.length)]) + ')'
}
let getBGImgLinkUrl = (e:string)=>{
    return e.replace(new RegExp("@"),"src")
}

watch(() => 
    router.currentRoute.value.path,
    () => {
      randomBackground()
},{immediate: true,deep: true})



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
@import url('./style/index.scss');
</style>