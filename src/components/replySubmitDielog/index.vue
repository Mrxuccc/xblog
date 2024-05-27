<template>
    <el-dialog class="replyDielog" v-model="visible" title="留言" width="350" center>
        <a-textarea
          class="shareBox-bottom-commentBox-input"
          v-model:value="replyValue"
          placeholder="写下点什么..."
          :auto-size="{ minRows: 7, maxRows: 5 }"
        />
        <template #footer>
            <div  class="replyDielog-footer" >
                <div class="replyDielog-footer-send">
                  <i class="xblog-EmojiAdd xfont"></i>
                  <i class="xblog-tupian xfont"></i>
                </div>
                <div class="replyDielog-footer-submit" @click="submitReply">
                  提交
                </div>
            </div>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>

//输入text
const replyValue = ref<string>('')
//显示隐藏
let visible = ref<boolean>(true)
//外部显示隐藏控制
const props = withDefaults(
    defineProps<{
        dialogFormVisible:boolean
    }>(),{
        dialogFormVisible:true
    }
)

const emit = defineEmits(['replyVisible','submitReply'])


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
        if(!newVal) replyValue.value = '' //清空
    },{
        immediate:true,deep:true
    }
)
//提交
const submitReply = ()=>{
    emit('submitReply',replyValue.value)
    visible.value = false

}


</script>

<style lang="scss" scoped>
@import url(./style/index.scss);
</style>