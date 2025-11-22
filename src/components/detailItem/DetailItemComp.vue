<script setup>
import CarrousselImg from '@/components/detailItem/CarrousselImg.vue';
import TextItem from '@/components/detailItem/TextItem.vue';

</script>
<template>
    <section>
        <CarrousselImg :slides=slides />
        <TextItem />
    </section>
</template>
<style scoped>
section {
    display: grid;
    grid-template-columns: 6fr 4fr; 
    align-items: center;
    gap: 1rem;
    margin: 2rem auto;
    width: 90%;
    height: 100%;
    padding: 1rem;
    border: 1px solid #E2E8F0;
    border-radius: 1rem;
}
@media screen and (max-width: 1024px) {
    section {
        grid-template-columns: 1fr; 
    }
    
}
</style>