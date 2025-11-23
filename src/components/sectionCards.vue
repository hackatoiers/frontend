<script setup>
import Card from '@/components/card.vue'
import { useItemStore } from '@/stores/items'
import { computed } from 'vue'

const itens = useItemStore().state;

const cards = computed(() => {
  const allItems = Array.isArray(itens.items) ? itens.items : Object.values(itens.items);

  const shuffled = [...allItems].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, 4);
});
</script>

<template>
  <div class="section-container">
    <Card
      v-for="(card, index) in cards"
      :id="card.id"
      :key="index"
      :title="card.name"
      :description="card.description"
      :image="card.photos?.[0]"
      :descriptionLimit="card.descriptionLimit"
    />
  </div>
</template>


<style scoped>
.section-container {
  width: 80%;
  margin: 0 auto 2rem auto;
  display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;
}

/* Mobile — 1 card por linha */
@media (max-width: 640px) {
  .section-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
