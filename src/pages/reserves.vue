<script setup>
import HeaderComp from '@/components/header/HeaderComp.vue';
import ListReservasComp from '@/components/listReservas/ListReservasComp.vue';
import Footer from '@/components/Footer.vue';

</script>
<template>
    <div class="ai">
    <HeaderComp :forceScrolled="true" />
    </div>
    <ListReservasComp />
    <Footer />

</template>
<style scoped>
.ai{
    height: 70px;
}
</style>