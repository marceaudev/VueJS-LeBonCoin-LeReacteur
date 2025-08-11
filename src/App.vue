<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - var(--header-height));
}
</style>
