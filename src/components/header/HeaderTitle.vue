<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const textColor = ref("white")

function scrolled(y) {
  if (y > 50) {
    textColor.value = "black"
  } else {
    textColor.value = "white"
  }
}

function onScroll() {
  scrolled(window.scrollY)
}

onMounted(() => window.addEventListener("scroll", onScroll))
onUnmounted(() => window.removeEventListener("scroll", onScroll))
</script>

<template>
  <div>
    <h1 :style="{ color: textColor }">ACERVO</h1>
  </div>
</template>

<style scoped>
h1 {
  transition: 0.3s;
}
</style>