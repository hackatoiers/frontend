<script setup>
import { ref, onMounted, watch } from 'vue';
import Card from '@/components/card.vue';
import searchInput from './searchInput.vue';
import { useItemStore } from '@/stores/items';

const itemStore = useItemStore();
const page = ref(1);
const perPage = ref(999);

onMounted(async () => {
    await itemStore.fetchAll(page.value, perPage.value);
});

const items = ref([]);
watch(
    () => itemStore.state.items,
    (newItems) => {
        items.value = newItems;
    },
    { immediate: true }
);
</script>

<template>
    <div>
        <searchInput />
    </div>

    <div class="list">
        <Card v-for="item in itemStore.filteredItems" :key="item.id" :id="item.id" :title="item.name" :description="item.description"
            :image="item.photos?.[0] || '/map-pin.svg'" :descriptionLimit="50" />
    </div>
</template>

<style scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    height: 94vh;
    overflow-y: scroll;
    margin: 1rem 0 5rem 0;
}
</style>