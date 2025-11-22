<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import HeaderTitle from '@/components/header/HeaderTitle.vue';
import HeaderButton from '@/components/header/HeaderButton.vue';
import HeaderNav from '@/components/header/HeaderNav.vue';

const props = defineProps({
    forceScrolled: {
        type: Boolean,
        default: false
}})

const isScrolled = ref(false)
const isOpen = ref(false)

const updateScrollState = () => {
    // Se a página pediu para o header ficar sempre scrolled
    if (props.forceScrolled) {
        isScrolled.value = true
        return
    }

    // Se o menu estiver aberto
    if (isOpen.value) {
        isScrolled.value = true
        return
    }

    // Comportamento normal
    isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
    isOpen.value = !isOpen.value
    updateScrollState()
}

const handleScroll = () => {
    updateScrollState()
}

const handleResize = () => {
    const isDesktop = window.innerWidth > 768

    // Se voltou pro desktop, fechar o menu e recalcular o scrolled
    if (isDesktop && isOpen.value) {
        isOpen.value = false
        updateScrollState()
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
})
</script>


<template>
    <header :class="{ scrolled: isScrolled }">

        <div class="header-title">
            <HeaderTitle />
        </div>

        <div class="header-nav">
            <HeaderNav />
        </div>

        <div class="header-dropdown">
            <img :src="'/menu-mobile-2.svg'" alt="menu" class="mobile-icon" @click="toggleMenu">

            <transition name="fade">
                <div v-if="isOpen" class="dropdown-panel">
                    <p class="dropdown-label">Acervo</p>

                    <router-link to="/" class="dropdown-item">Animal</router-link>
                    <router-link to="/" class="dropdown-item">Mineral</router-link>
                    <router-link to="/" class="dropdown-item">Vegetal</router-link>
                    <router-link to="/" class="dropdown-item">Outro</router-link>
                    <router-link to="/" class="dropdown-item">Tudo</router-link>

                </div>
            </transition>
        </div>

        <div class="header-button">
            <HeaderButton :isScrolled="isScrolled" />
        </div>

    </header>
</template>


<style scoped>
header {
    background-color: transparent;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    position: fixed;
    z-index: 20;

    opacity: 0.85;
    transition: opacity 0.35s ease, background-color 0.35s ease, border-color 0.35s ease;
}

header.scrolled {
    background-color: #ffffff;
    border-bottom: 1px solid rgba(32, 32, 32, 0.219);
    opacity: 1;
}

.mobile-icon {
    width: 35px;
    height: 35px;
    cursor: pointer;
    transition: 0.3s ease;
}

.header-dropdown {
    display: none;
    position: relative;
}

.dropdown-panel {
    position: absolute;
    top: 55px;
    right: 0;
    width: 170px;
    background: white;
    border-radius: 10px;
    border: 1px solid rgba(32, 32, 32, 0.219);
    padding: 10px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.dropdown-label {
    font-size: 14px;
    color: #000000;
    padding-left: 6px;
    padding-bottom: 6px;
    font-weight: 600;
    border-bottom: 1px solid;
}

.dropdown-item {
    display: block;
    padding: 8px 6px;
    border-radius: 6px;
    color: #222;
    text-decoration: none;
    transition: 0.25s ease;
    font-size: 15px;
}

.dropdown-item:hover {
    background: #f2f2f2;
}

@media (max-width: 768px) {
    .header-nav {
        display: none;
    }

    .header-dropdown {
        display: block;
    }

    .header-button {
        display: none;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .25s ease, transform .25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}
</style>