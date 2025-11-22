<script setup>
import HeaderComp from '@/components/header/HeaderComp.vue';
// import listItens from '@/components/listItens/listItens.vue';
import ListItensComp from '@/components/listItens/ListItensComp.vue';
import Footer from '@/components/Footer.vue';
</script>
<template>
    <div class="head">
    <HeaderComp :forceScrolled="true" />
    </div>
    <ListItensComp />
    <Footer />
</template>
<style scoped>
.head{
    height: 50px;
}
</style>