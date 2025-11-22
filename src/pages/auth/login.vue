<route lang="json">{
  "meta": {
    "requiresGuest": true
  }
}</route>
<script setup   >
import LoginForm from "@/components/LoginForm.vue"
</script>
<template>
  <div class="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
    <div class="w-full max-w-xl md:max-w-4xl">
      <LoginForm />
    </div>
  </div>
  <!-- <div class="teste">
    <div class="w-full max-w-xl md:max-w-4xl">
      <LoginForm />
    </div>
  </div> -->
</template>
<style scoped>
.teste {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
</style>






<!-- <route lang="json">{
  "meta": {
    "requiresGuest": true
  }
}</route>
<script setup>
import { useAuth } from '@/stores/auth';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from 'lucide-vue-next'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'

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
    <section><div class="login">
        <div class="title"><h2>Bem Vindo de Volta</h2></div>
        <div class="subtitle"><p>Logue com a sua conta para modificar o acervo</p></div>
    <form @submit.prevent="submitForm">
        <div class="input-label">
        <label for="email">Email</label>
        <input id="email" v-model="form.data.email" placeholder="example@example.com" />
        <div v-if="form.errors.email" style="color: red; font-size: 14px">
            {{ form.errors.email }}
        </div>
        </div>

        <br />
        <div class="input-label">
        <label for="password">Senha</label>
        <input id="password" type="password" v-model="form.data.password" />
        <div v-if="form.errors.password" style="color: red; font-size: 14px">
            {{ form.errors.password }}
        </div>
        </div>

        <br />
        <div class="grid w-full max-w-xl items-start gap-4">
        <Alert>
      <AlertCircleIcon />
      <AlertTitle>Login apenas para pessoal autorizado</AlertTitle>
      <AlertDescription>
        <p>Caso você não tenha permissão, volte para a tela inicial</p>
      </AlertDescription>
    </Alert>
    </div>

        <button type="submit" :disabled="form.processing">
            {{ form.processing ? "Entrando..." : "Entrar" }}
        </button>
    </form>
    </div>
    <div class="side-img"></div>
    </section>
</template>

<style scoped>
button{
    padding: .5rem;
    background-color: #554F48;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: .5rem;
    transition: .3s ease-in-out;
}
button:hover{
    background-color: #403937;
    /* color: black; */
}
.input-label {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;
}
.input-label > input {
    padding: .5rem;
    border: solid 2px #554F48;
    border-radius: .5rem;
}
.input-label > input:focus {
    outline: none;
    border-color: #fff;
    box-shadow: 0 0 0 2px #554F48;
}
.input-label > label {
    font-size: 14px;
    font-weight: bold;
}
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}
.title{
    width: 100%;
    text-align: center;
}
.title > h2{
    font-size: 24px;
    font-weight: bold;

}
.subtitle{
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
}
.subtitle > p{
    font-size: 14px;
    color: #554F48;
}
section {
    width: 60%;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 50vh;
    /* background-color: black ; */
    border: 1px solid black;
    border-radius: 1rem;
}
.login {
    /* border: 1px solid red; */
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
}
.side-img{
    /* border: 1px solid blue; */
    background-color: black;
    /* background-image: url('/images/login-bg.jpg'); */
    background-size: cover;
    background-position: center;
}
input {
    border: solid 1px black;
}
@media screen and (max-width: 1024px) {
    section {
        margin-top: 10rem;
        grid-template-columns: 1fr;
        width: 90%;
    }
    
}
</style> -->
