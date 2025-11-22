<script setup>
import { useAuth } from '@/stores/auth';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { AlertCircleIcon } from 'lucide-vue-next';

const props = defineProps({
  class: { type: null, required: false },
});

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
  <div :class="cn('flex flex-col gap-6', props.class)">
    <Card class="overflow-hidden p-0">
      <CardContent class="grid p-6 md:grid-cols-2">
        <form class="p-6 md:p-8 fe" @submit.prevent="submitForm">
          <FieldGroup>
            <div class="flex flex-col items-center gap-2 text-center">
              <h1 class="text-2xl font-bold">Bem Vindo de Volta</h1>
              <p class="text-muted-foreground text-balance">
                Login para Modificar o Acervo
              </p>
            </div>
            <Field>
              <FieldLabel for="email"> Email </FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                class="fe-in"
                required
                v-model="form.data.email"
              />
            </Field>
            <Field>
              <div class="flex items-center justify-between">
                <FieldLabel for="password"> Senha </FieldLabel>
                <a
                  href="#"
                  class="ml-auto text-sm underline-offset-2 hover:underline"
                >
                  Esqueceu a senha?
                </a>
              </div>
              <Input id="password" type="password" required class="fe-in" v-model="form.data.password" />
            </Field>
            <Field>
              <Button type="submit" :disabled="form.processing">{{ form.processing ? "Entrando..." : "Entrar" }}</Button>
            </Field>
            <FieldSeparator
              class="*:data-[slot=field-separator-content]:bg-card text-center"
            >
            </FieldSeparator>
            
            <Alert >
      <AlertCircleIcon />
      <AlertTitle>Login somente para pessoal autorizado</AlertTitle>
      <AlertDescription>
        <p>Se não tiver autorização, volte para a página inicial</p>
      </AlertDescription>
    </Alert>

            <FieldDescription class="text-center">
              Don't have an account?
              <a href="#"> Sign up </a>
            </FieldDescription>
          </FieldGroup>
        </form>
        <div class="bg-muted relative hidden md:block">
          <img
            src="/placeholder.svg"
            alt="Image"
            class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </CardContent>
    </Card>
    <!-- <FieldDescription class="px-6 text-center">
      By clicking continue, you agree to our
      <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
    </FieldDescription> -->
  </div>
</template>
<style scoped>
.fe{
  padding: 1rem;
}
.fe-in{
  padding: .5rem;
}
</style>
