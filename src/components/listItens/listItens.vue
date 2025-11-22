<script setup>
import {ref} from 'vue';
import Card from '@/components/card.vue';
import searchInput from './searchInput.vue';

const items = ref([
    { id: 1, name: 'Item 1', desc: 'Description for Item 1', img: '/map-pin.svg' },
    { id: 2, name: 'Item 2', desc: 'Description for Item 2', img: '/map-pin.svg' },
    { id: 3, name: 'Item 3', desc: 'Description for Item 3', img: '/map-pin.svg' },
    { id: 1, name: 'Item 1', desc: 'Description for Item 1', img: '/map-pin.svg' },
    { id: 2, name: 'Item 2', desc: 'Description for Item 2', img: '/map-pin.svg' },
    { id: 3, name: 'Item 3', desc: 'Description for Item 3', img: '/map-pin.svg' },
]);
</script>
<template>
    <div>
        <searchInput /> 
    </div>
        <div class="list">
            <Card 
                v-for="item in items" 
                :key="item.id" 
                :title="item.name" 
                :description="item.desc" 
                :image="item.img" 
                :descriptionLimit="50"
            />
        </div>
</template>
<style scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}
</style>