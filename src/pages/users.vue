<script setup>
import HeaderComp from '@/components/header/HeaderComp.vue';
import Footer from '@/components/Footer.vue';
import ListUsersComp from '@/components/listUsers/ListUsersComp.vue';
</script>
<template><div class="ai">
    <HeaderComp :forceScrolled="true" />
    </div>
    <ListUsersComp />
    <span></span>
    <Footer />
</template>
<style scoped>
.ai{
    height: 70px;
}
span {
    display: block;
    height: 80px;
}
</style>
