<script setup>
import { ref, onMounted, watch } from 'vue';
import Card from '@/components/card.vue';
import searchInput from './searchInput.vue';
import { useItemStore } from '@/stores/items';

const itemStore = useItemStore();
const page = ref(1);
const perPage = ref(10);

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
        <Card v-for="item in items" :key="item.id" :title="item.name" :description="item.description"
            :image="item.photos?.[0] || '/map-pin.svg'" :descriptionLimit="50" />
    </div>
</template>

<style scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}
</style>