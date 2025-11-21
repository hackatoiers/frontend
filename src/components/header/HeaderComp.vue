<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import HeaderTitle from '@/components/header/HeaderTitle.vue';
import HeaderButton from '@/components/header/HeaderButton.vue';
import HeaderNav from '@/components/header/HeaderNav.vue';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <img 
                        :src="isScrolled ? '/menu-mobile-2.svg' : '/menu-mobile.svg'" 
                        alt=""
                        class="mobile-icon"
                    >
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuLabel>Acervo</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <router-link to="/">Animal</router-link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <router-link to="/">Mineral</router-link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <router-link to="/">Vegetal</router-link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <router-link to="/">Outro</router-link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

        <div class="header-button">
            <HeaderButton :isScrolled="isScrolled" />
        </div>
    </header>
</template>


<style scoped>
header {
    background-color: #00000000;
    padding: 5px;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    position: fixed;
    transition: 0.3s ease;
    z-index: 10;
}


header.scrolled {
    background-color: #ffffff;
}


.mobile-icon {
    width: 35px;
    height: 35px;
    transition: 0.3s ease;
}

.header-dropdown {
    display: none;
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
</style>
