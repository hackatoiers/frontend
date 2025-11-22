<script setup>
import { computed } from 'vue'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import CardTitle from '@/components/ui/card/CardTitle.vue'
import CardDescription from '@/components/ui/card/CardDescription.vue'
import { Button } from '@/components/ui/button'

const props = defineProps({
  title: { type: String, default: 'Fóssil' },
  description: {
    type: String,
    default:
      'loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  image: { type: String, default: '' },
  descriptionLimit: { type: Number, default: 120 },
})

const truncatedDescription = computed(() => {
  const desc = props.description || ''
  const limit = Math.max(0, props.descriptionLimit || 0)
  if (!limit) return desc
  return desc.length > limit
    ? desc.slice(0, limit).trimEnd() + '...'
    : desc
})
</script>

<template>
  <div>
    <Card class="card-container">
      <img :src="props.image" :alt="props.title" class="image" />
      <div class="content-wrapper">
        <CardContent class="content">
          <CardTitle class="title">
            {{ props.title }}
          </CardTitle>
          <CardDescription class="description">
            {{ truncatedDescription }}
          </CardDescription>
        </CardContent>
        <CardFooter class="footer">
          <Button class="button">
            Ver mais
          </Button>
        </CardFooter>
      </div>
    </Card>
  </div>
</template>

<style scoped>
.card-container {
  width: 320px;
  height: 448px;
  border-radius: 12px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
}

.content-wrapper {
  padding: 5px 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.content {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer {
  padding: 0;
}

.button {
  width: 100%;
  background: #554F48;
  cursor: pointer;
}

.button:hover {
  background: #403B36;
}

.title {
  font-weight: bold;
}

.description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
