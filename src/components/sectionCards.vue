<script setup>
import Card from '@/components/card.vue'

const props = defineProps({
  cards: {
    type: Array,
    default: () => [
      {
        title: "Fóssil A",
        description: "Lorem ipsum...",
        image: "/download.jpeg"
      },
      {
        title: "Fóssil B",
        description: "Avatar é isso aquilo q preciso que toi pq isso é um teste então vamos ver se esta tuudo certo mesmo",
        image: "/download.jpeg"
      },
      {
        title: "Fóssil C",
        description: "Lorem ipsum...",
        image: "/download.jpeg"
      }, {
        title: "Fóssil D",
        description: "Lorem ipsum...",
        image: "/download.jpeg"
      },
    ],
  },
})
const cards = props.cards
</script>

<template>
  <div class="section-container">
    <Card v-for="(card, index) in cards" :key="index" :title="card.title" :description="card.description"
      :image="card.image" :descriptionLimit="card.descriptionLimit" />
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
