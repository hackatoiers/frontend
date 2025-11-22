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
    <div class="container" :style="{ color: textColor }">
        <router-link to="/">Animal</router-link>
        <router-link to="/">Vegetal</router-link>
        <router-link to="/">Mineral</router-link>
        <router-link to="/">Outro</router-link>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 30px;
    transition: 0.3s;
}
</style>