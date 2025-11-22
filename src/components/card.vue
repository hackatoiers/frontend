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
    default: 'loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  image: { type: String, default: '' },
  descriptionLimit: { type: Number, default: 120 },
})

const truncatedDescription = computed(() => {
  const desc = props.description || ''
  const limit = Math.max(0, props.descriptionLimit || 0)
  if (!limit) return desc
  return desc.length > limit ? desc.slice(0, limit).trimEnd() + '...' : desc
})
</script>

<template>
  <div>
    <Card class="w-[320px] rounded-xl">
      <div class="px-4">
        <img :src="props.image" :alt="props.title" class="w-full h-70 object-cover block rounded-lg" />
      </div>
      <CardContent>
        <CardTitle class="text-base font-bold">{{ props.title }}</CardTitle>
        <CardDescription class="text-sm mt-1 line-clamp-2">
          {{ truncatedDescription }}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="" class="w-full hover:bg-[#554F48] text-white cursor-pointer bg-[#554F48]">
          Ver mais
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
