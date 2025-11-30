<script setup>
import DetailItemAdmin from '@/components/detailItem/DetailItemAdmin.vue';
import HeaderComp from '@/components/header/HeaderComp.vue';
import Footer from '@/components/Footer.vue';
</script>
<template>
    <div class="s"><HeaderComp /></div>
    <DetailItemAdmin />
    <Footer />
</template>
<style scoped>
.s{
    height: 70px;
}
</style>