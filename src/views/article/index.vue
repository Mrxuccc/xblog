<template>
  <div class="article">
    <KeepAlive>
      <HeadImageBox tag="article" :title="article.text" :info="article.id" :imgs="article.img"></HeadImageBox>
    </KeepAlive>
    <!-- 文章内容 -->
    <div class="article-content">
      <!-- 文章具体内容 -->
      <!-- <div v-html="pageArticle" class="article-content-page"></div> -->
      <MarkDownArticle class="article-content-page" :text="pageArticle"></MarkDownArticle>
      <div class="article-content-update">
        <span>文章最后更新于&nbsp;</span><span>{{ update }}</span>
      </div>
      <!-- 评论区 -->
      <div class="article-content-bottom">
        <div class="article-content-bottom-commentBox">
          <div class="article-content-bottom-commentBox-head">
            <div></div>
            <div>留言</div>
          </div>
          <a-textarea class="article-content-bottom-commentBox-input" v-model:value="commentValue"
            placeholder="写下点什么..." :auto-size="{ minRows: 7, maxRows: 5 }" />
          <div class="article-content-bottom-commentBox-fn">
            <div class="article-content-bottom-commentBox-fn-send">
              <i class="xblog-EmojiAdd xfont"></i>
              <i class="xblog-tupian xfont"></i>
            </div>
            <div class="article-content-bottom-commentBox-fn-submit" @click="subMitComment()">
              提交
            </div>
          </div>
          <div class="article-content-bottom-commentBox-response">
            <div class="article-content-bottom-commentBox-response-title">
              Comments | {{ commentList.length || 0 }} 条留言
            </div>
            <CommentBox :commentList="commentList" @toReply="toReply"></CommentBox>
            <div v-show="commentList.length === 0" class="article-content-bottom-commentBox-response-noResponse">
              来发第一个留言呗~
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 评论弹窗 -->
    <ReplySubmitDielog :dialogFormVisible="dialogFormVisible" @replyVisible="replyVisible" @submitReply="submitReply">
    </ReplySubmitDielog>
  </div>
</template>
<script lang="ts" setup>
import moment from "moment";
import { useRoute } from "vue-router";
import { articleStore } from "@/store/articleStore";
import { userStore } from "@/store/userStore";
const router = useRoute();
import type { setCommentType } from "@/common/ts/commonInterface";
import { getCommentList, pushCommentList } from "@/api/index";
//文章数据处理
const article = computed(() => {
  return articleStore().article;
});
const pageArticle = computed(() => articleStore().article.info);
const update = computed(() => {
  return moment(
    articleStore().article.updateDate
      ? articleStore().article.updateDate
      : articleStore().article.createDate
  ).format("YYYY-MM-DD hh:mm:ss");
});
onBeforeMount(() => {
  articleStore().getArticle(router.query.id as string);
  toComment();
});

//输入文本
let commentValue = ref<string>("");
//文本清空
const cleanInput = () => {
  commentValue.value = "";
};
//文章评论-提交
const subMitComment = () => {
  pushCommentList({
    shareid: router.query.id as string,
    userid: userStore().userInfo.userid,
    comment: commentValue.value,
  }).then((res: any) => {
    console.log(res)
    toComment();
    cleanInput();
  });
};

//评论列表
let commentList = ref<setCommentType[]>([]);
//获取评论数据
const toComment = () => {
  getCommentList({ id: router.query.id as string }).then((res: any) => {
    commentList.value = res.data as setCommentType[];
  });
};

//回复评论
let userid = ref<string | number>("");
let toIds = ref<string | number>("");
const dialogFormVisible = ref<boolean>(false);
//回复事件
const toReply = (toId: string | number, userids: string | number) => {
  userid.value = userids;
  toIds.value = toId;
  dialogFormVisible.value = true;
};
//提交弹窗事件
const replyVisible = (visible: boolean) => {
  if (!visible) dialogFormVisible.value = visible;
};
//回复评论 提交
const submitReply = (text: string) => {
  pushCommentList({
    shareid: router.query.id as string, //文章id
    userid: userStore().userInfo.userid, //用户id
    comment: text, //内容
    toUserid: userid.value, // 评论对象的用户id
    toReplyid: toIds.value // 评论对象的id
  }).then(() => {
    toComment();
    cleanInput();
  });
};
</script>
<style lang="scss" scoped>
@import url("./style/index.scss");
</style>
