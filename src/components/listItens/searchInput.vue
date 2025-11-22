<script setup>
</script>
<template>
<div class="cont-input">
    <img src="/search.svg" alt="">
    <input type="text" placeholder="Buscar item...">
</div>
</template>
<style scoped>
.cont-input {
    width: 70%;
    margin: 1rem 0;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    gap: .5rem;
    align-items: center;
    padding: 0 12px;
    box-sizing: border-box;
    border-radius: .5rem;
}
.cont-input input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 16px;
}
@media screen and (max-width: 1024px) {
    .cont-input {
        width: 100%;
    }
    
}
</style>