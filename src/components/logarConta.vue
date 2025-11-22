<script setup>
import { ref } from 'vue'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const passwordVisible = ref(false)
</script>

<template>
  <Card class="card">
    <div class="enfeite"></div>

    <div class="avatar">
      <img src="/public/user.svg" alt="">
    </div>

    <div class="align">

      <CardContent>
        <form>
          <div class="form-container">

            <!-- Email -->
            <div class="field">
              <Label for="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div class="field">
              <div class="label-row">
                <Label for="password">Senha</Label>
                <a class="forgot">Esqueceu a senha?</a>
              </div>
              <div class="input-with-icon">
                <Input id="password" :type="passwordVisible ? 'text' : 'password'" required placeholder="Insira sua senha"/>
                <button type="button" class="icon-button" @click="passwordVisible = !passwordVisible">
                  <img v-if="!passwordVisible" src="/eye.svg" alt="Mostrar" class="icon" />
                  <img v-else src="/eye-off.svg" alt="Ocultar" class="icon" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="footer">
        <a href="#">Não possui conta?</a>
        <Button class="btn-full" type="submit">Cancelar</Button>
        <Button class="btnSair-full" type="button">Entrar</Button>
      </CardFooter>
    </div>
  </Card>
</template>

<style>
.card {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.align {
  padding: 25px;
  gap: 10px;
}

/* topo */
.enfeite {
  background: linear-gradient(135deg, #334155 0%, #708FBB 100%);
  width: 100%;
  height: 25vh;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* avatar */
.avatar {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: #ffffff;
  border: 4px solid #ffffff;
  margin: -105px 200px -25px auto;
  border: #ced1d5 1px solid;
}

.avatar img {
  width: 60%;
  height: 60%;
  margin: 20%;
}

/* form */
.form-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.field {
  display: grid;
}

.label-row {
  display: flex;
  align-items: center;
}

label, a{
  margin-bottom: 6px;
}

.forgot {
  margin-left: auto;
  font-size: 0.85rem;
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
  opacity: 0.8;
}

.forgot:hover {
  opacity: 1;
}

/* Input com ícone */
.input-with-icon {
  position: relative;
}

input {
  padding-left: 10px;
}

#onfirm-password {
  margin-bottom: 10px;
}

.icon-button {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 20px;
  height: 20px;
}

.footer {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.footer a {
  text-decoration: underline;
  cursor: pointer;
  margin-top: 12px;
  font-size: 15px;
}

.btn-full {
  width: 25%;
  cursor: pointer;
  background-color: #f21b1b;
  margin-left: 20px;
}

.btnSair-full {
  width: 25%;
  background-color: #41c567;
  cursor: pointer;
}
</style>
