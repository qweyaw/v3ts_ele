<template>
  <div class="slide">
    <a-menu>
      <a-menu-item key="1">
        <template #icon>
          <PieChartOutlined></PieChartOutlined>
        </template>
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <DesktopOutlined />
        </template>
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <InboxOutlined />
        </template>
        <span>Option 3</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import {
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined,
} from "@ant-design/icons-vue";
</script>
<style>
.slide {
  height: 100%;
  background-color: white;
}
</style>
