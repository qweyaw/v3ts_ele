<template>
  <button @click="goAbout">About</button>
  <button @click="goHome">Home</button>
  <router-view></router-view>
</template>

<script setup lang="ts">
// import { useIpcRenderer } from '@vueuse/electron'
// const ipcRenderer = useIpcRenderer()
// ipcRenderer.send("window-new", 'im-render') // 向主进程通信

import { useRouter } from 'vue-router';

const router = useRouter()
function goAbout() {
  router.push('/about')
}
function goHome() {
  router.push('/')
}
</script>

<style>
</style>
