<route lang="json">{
  "meta": {
    "requiresGuest": true
  }
}</route>
<script setup>
import { useAuth } from '@/stores/auth';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const auth = useAuth();

const form = reactive({
    data: {
        email: '',
        password: '',
        remember: false
    },
    errors: {
        email: '',
        password: '',
    },
    processing: false
})

async function submitForm() {
    form.processing = true;

    form.errors.email = '';
    form.errors.password = '';

    try {
        await auth.login(
            form.data.email,
            form.data.password,
            form.data.remember
        );

        router.push('/');
    } catch (error) {
        const err = error?.response?.data?.errors;

        if (err?.email) {
            form.errors.email = err.email[0];
        }

        if (err?.password) {
            form.errors.password = err.password[0];
        }

        if (!form.errors.email && !form.errors.password) {
            form.errors.password = 'Erro ao autenticar.';
        }

        form.processing = false;
    }
}
</script>

<template>
    <form @submit.prevent="submitForm">
        <label for="email">Email</label>
        <input id="email" v-model="form.data.email" />
        <div v-if="form.errors.email" style="color: red; font-size: 14px">
            {{ form.errors.email }}
        </div>

        <br />

        <label for="password">Senha</label>
        <input id="password" type="password" v-model="form.data.password" />
        <div v-if="form.errors.password" style="color: red; font-size: 14px">
            {{ form.errors.password }}
        </div>

        <br />

        <button type="submit" :disabled="form.processing">
            {{ form.processing ? "Entrando..." : "Entrar" }}
        </button>
    </form>
</template>

<style scoped>
input {
    border: solid 1px black;
}
</style>
