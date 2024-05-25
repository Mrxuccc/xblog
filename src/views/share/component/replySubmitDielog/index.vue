<template>
    <el-dialog v-model="visible" title="留言" width="400" center>
        <template #footer>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
let visible = ref<boolean>(true)
const props = withDefaults(
    defineProps<{
        dialogFormVisible:boolean
    }>(),{
        dialogFormVisible:true
    }
)

const emit = defineEmits(['replyVisible'])


watch(
    ()=> props.dialogFormVisible,
    (newVal)=>{
         visible.value = newVal
    },{
        immediate:true,deep:true
    }
)
watch(
    visible,
    (newVal)=>{
        emit('replyVisible',newVal)
    },{
        immediate:true,deep:true
    }
)



</script>

<style lang="scss" scoped>
@import url(./style/index.scss);
</style>