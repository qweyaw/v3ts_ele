<template>
  <ul class="header_menu flex-space-ard">
    <li v-for="menu in header_menu">{{ menu.label }}</li>
  </ul>
</template>
<script lang="ts" setup>
import { header_menu } from "@/constants";
</script>
<style lang="scss" scoped>
.header_menu {
  height: 100%;
  background-color: aqua;
}
</style>
