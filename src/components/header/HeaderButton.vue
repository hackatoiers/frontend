<script setup>
const props = defineProps({
    isScrolled: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <button :class="{ 'scrolled-btn': props.isScrolled }">
        Acessar acervo
    </button>
</template>

<style scoped>
button {
    padding: 10px 20px;
    background-color: transparent;
    color: rgb(0, 0, 0);
    border: 1px solid rgb(0, 0, 0);
    border-radius: 10px;
    cursor: pointer;
    transition: 0.25s ease;
    z-index: 10;
}

/* --------- HOVER NORMAL (sem scroll) --------- */
button:hover {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
}

/* --------- ESTILO QUANDO SCROLLED --------- */
.scrolled-btn {
    background-color: #000000;
    color: rgb(255, 255, 255);
    border: none;
}

/* --------- HOVER QUANDO SCROLLED --------- */
.scrolled-btn:hover {
    background-color: rgba(0, 0, 0, 0);
    color: #000000;
    border: 1px solid #000000;
}
</style>
