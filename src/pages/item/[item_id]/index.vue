<script setup>
import HeaderComp from '@/components/header/HeaderComp.vue';
import DetailItem from '@/components/detailItem/DetailItemComp.vue';
</script>
<template>
    <div class="pau">
    <HeaderComp :forceScrolled="true" />
    </div>
    <DetailItem />
</template>
<style>
.pau{
    height: 50px;
}
</style>