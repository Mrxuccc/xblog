<template>
  <div class="markDownPage">
    <v-md-preview :text="text"></v-md-preview>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    text: string;
  }>(),
  {
    text: "",
  }
);
props;
</script>

<style lang="scss" scoped>
.markDownPage {
  width: 100%;
  min-height: 400px;
  height: auto;
  color: #000;
}
</style>
