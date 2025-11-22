<script setup>
import { useAuth } from '@/stores/auth.js';

const authStore = useAuth();
const props = defineProps({
    islogged: {
        type: Boolean,
        default: false
}})
</script>

<template>
    <div class="container" v-if="!props.islogged">
        <router-link to="/itens">Animal</router-link>
        <router-link to="/itens">Vegetal</router-link>
        <router-link to="/itens">Mineral</router-link>
        <router-link to="/auth/login">Login</router-link>
    </div>
    <div class="container" v-if="props.islogged">
        <router-link to="/itens">Itens</router-link>
        <router-link to="/admin/item/create">Criar Item</router-link>
        <router-link to="/reserves">Reservas</router-link>
        <router-link to="/users">Usuários</router-link>
        <button @click="authStore.logout()">logout</button>

    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 30px;
    transition: 0.3s;
    z-index: 10;
}
</style>