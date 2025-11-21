<script setup>

</script>

<template>
    <div class="container">
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
    z-index: 10;
}
</style>