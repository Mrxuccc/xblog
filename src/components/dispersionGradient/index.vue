<template>
    <div class="Gradient">
        <div class="Gradient-item3"></div>
        <div class="Gradient-item4"></div>
        <div  class="Gradient-content">
            <slot>
                
            </slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = withDefaults(
    defineProps<{
        width:string|number,
        height:string|number
    }>(),{
        width:'250px',
        height:'200px'
    }
)
props
</script>

<style lang="scss" scoped>
.Gradient {
    position: relative;
    width: v-bind(width);
    height: v-bind(height);
    // border-radius:8%;
    // background: rgb(192, 187, 187);
    overflow: hidden;
    &-item {
        &1 {
            position: absolute;
            top:-3%;
            left: -3%;
            width: 60%;
            height: 0;
            padding-bottom: 60%;
            border-radius: 50%;
            background-color: rgba(96, 197, 186,.6);
            filter: blur(25px);
            z-index: 3;
        }
        &2 {
            position: absolute;
            top:0%;
            right: -2%;
            width: 45%;
            height: 0;
            padding-bottom: 45%;
            border-radius: 50%;
            background-color: rgba(254, 238, 125, 0.6);
            filter: blur(17px);
            z-index: 1;
        }//#a5dff9  #ef5285
        &3 {
            position: absolute;
            top: -25%;
            right: -42%;
            width: 100%;
            height: 0;
            padding-bottom: 80%;
            border-radius: 50%;
            background-color: rgba(73, 177, 245, 0.7);
            filter: blur(30px);
            z-index: 2;
        }
        &4 {
            position: absolute;
            bottom: -20%;
            right: -29%;
            width: 70%;
            height: 0;
            padding-bottom: 73%;
            border-radius: 50%;
            background-color: rgba(73, 177, 245, 0.2);
            filter: blur(25px);
            z-index: 1;
        }
    }
    &-content {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius:8%;
        z-index: 4;
    }
}
</style>
