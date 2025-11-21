<script setup>
const props = defineProps({
    isScrolled: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <!-- aplica a classe quando scrolled -->
    <button :class="{ 'scrolled-btn': props.isScrolled }">
        Acessar acervo
    </button>
</template>

<style scoped>
button {
    padding: 10px 20px;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.25s ease;
}

/* --------- HOVER NORMAL (sem scroll) --------- */
button:hover {
    background-color: white;
    color: black;
}

/* --------- ESTILO QUANDO SCROLLED --------- */
.scrolled-btn {
    background-color: #554F48;
    color: rgb(255, 255, 255);
    border: none;
}

/* --------- HOVER QUANDO SCROLLED --------- */
.scrolled-btn:hover {
    background-color: rgba(0, 0, 0, 0);
    color: #554F48;
    border: 1px solid #554F48;
}
</style>
