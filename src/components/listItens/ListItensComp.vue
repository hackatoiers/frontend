<script setup>
import listItens from '@/components/listItens/listItens.vue'
import sidebar from './sidebar.vue';
</script>
<template>
    <section>
        <sidebar />
        <div class="cont-itens">
            <listItens />
        </div>
    </section>
</template>
<style scoped>
section {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 16px;
    /* width: 80%; */
    width: 80vw;
    margin: 1rem auto;
    /* border: 1px solid black; */
    padding: .5rem;
}
.cont-itens {
    width: 100%;
}
</style>
