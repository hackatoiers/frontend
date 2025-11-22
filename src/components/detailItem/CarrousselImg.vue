<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
})

const currentIndex = ref(0)

const next = () => {
  currentIndex.value =
    currentIndex.value >= props.slides.length - 1
      ? 0
      : currentIndex.value + 1
}

const prev = () => {
  currentIndex.value =
    currentIndex.value === 0
      ? props.slides.length - 1
      : currentIndex.value - 1
}

const goTo = (index) => {
  currentIndex.value = index
}

const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}))
</script>

<template>
  <div class="carousel">
    <div class="carousel-track" :style="trackStyle">
      <div class="carousel-slide" v-for="(slide, i) in slides" :key="i">
        <div class="slide-content">
          <img :src=slide alt="">
        </div>
      </div>
    </div>
    <button class="nav prev" @click="prev"><img src="/public/arrow-left-circle.svg" alt=""></button>
    <button class="nav next" @click="next"><img src="/public/arrow-right-circle.svg" alt=""></button>

    <div class="dots">
      <span
        v-for="(s, i) in slides"
        :key="i"
        class="dot"
        :class="{ active: i === currentIndex }"
        @click="goTo(i)"
      />
    </div>
  </div>
</template>


<style scoped>
.carousel {
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
  border-radius: 12px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  min-width: 100%;
}

.slide-content {
    width: 100%;
  height: 30rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
}
.slide-content > img {
  width: 85%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.nav {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid #554F48;
  vertical-align: middle;
  font-size: 20px;
  cursor: pointer;
  border-radius: 100%;
}
.nav> img{
    width: 100%;
    height: 100%;
}
.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.dots {
  position: absolute;
  bottom: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  background: white;
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  opacity: 1;
}
</style>


















<!-- <script setup>
import { ref, defineProps, onMounted } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
</script>
<template> -->
    <!-- <Carousel v-bind="config">
    <Slide v-for="item in itens.slice(0, 5)" :key="item.id">
      <div class="container">
        <div class="background">
          <img :src="`https://image.tmdb.org/t/p/original/${item.backdrop_path}`" alt="" />
        </div>
        <div class="content">
          <h1>{{ item.title }}</h1>
          <span class="rowCategories">
            <p v-for="genre in item.genre_ids" :key="genre.id">
              {{ genreStore.getGenreName(genre) }}
            </p>
          </span>
          <span class="description">
            <p>{{ item.overview }}</p>
          </span>
          <span class="actionButtons">
            <button class="white" @click="openMovie(item.id)">
              <img src="/public/assistirTest.svg" alt="" />Assistir Agora
            </button>
            <button @click="openMovie(item.id)">
              <img src="/public/verMaisTest.svg" alt="" />Ver mais
            </button>
          </span>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel> -->
  <!-- <Carousel v-bind="config">
    <Slide>
      <h1>BUCETA</h1>
    </Slide>
    <Slide>
      <h1>CUZINHO</h1>
    </Slide>
    <Slide>
      <h1>PINTÃO</h1>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>
<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.background {
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
}
.background > img {
  width: 100%;
  height: 100%;
  filter: brightness(0.4);
}
h1 {
  font-size: 2rem;
  color: white;
}
.content {
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 1rem;
  width: 40%;
  background: none;
}
.rowCategories {
  display: flex;
  gap: 1rem;
  border-radius: 1rem;
}
.description {
  padding: 1rem;
  border-radius: 1rem;
}
.description p {
  text-align: center;
}
.actionButtons {
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
}
.actionButtons > button {
  display: flex;
  align-items: center;
  width: 50%;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  transition: 0.5s;
  cursor: pointer;
}
.actionButtons > button:hover {
  background-color: #fff;
  color: black;
}
.actionButtons > button.white {
  background-color: #fff;
  color: black;
}
.actionButtons > button.white:hover {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.actionButtons > button img {
  width: 1.5rem;
}
.white {
  color: #fff;
}
</style> -->
