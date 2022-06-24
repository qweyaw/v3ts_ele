<template>
  <a-layout>
    <a-layout-header class="bg_white head">
      <Header></Header>
    </a-layout-header>
    <a-layout class="contentWrap">
      <a-layout-sider><Slide></Slide></a-layout-sider>
      <a-layout-content><Content></Content></a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
export default {
  name: "Home",
};
</script>
<script lang="ts" setup>
import Header from "@/components/Header.vue";
import Slide from "@/components/Slide.vue";
import Content from "@/components/Content.vue";
</script>

<style scoped>
.head {
  margin-left: 200px;
  padding: 0;
}
</style>
