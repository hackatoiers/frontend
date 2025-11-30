<script setup>
import CadastroPComp from '@/components/cadastrar-produto/CadastroPComp.vue';
import HeaderComp from '@/components/header/HeaderComp.vue';
import Footer from '@/components/Footer.vue';
</script>
<template>
    <HeaderComp />
    <span></span>
    <CadastroPComp />
    <Footer />
</template>
<style scoped>
span {
    display: block;
    height: 80px;
}
</style>