Header.vue:

<script setup>
import router from '@/router';
</script>

<template>
  <div>
    <h1 @click="router.push('/')">ACERVO</h1>
  </div>
</template>

<style scoped>
h1 {
  cursor: pointer;
  transition: 0.3s;
  z-index: 10;
  color: black;
}
</style>