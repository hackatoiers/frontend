<script setup></script>

<template>
  <div class="content">
    <img src="/public/img-section3.svg" alt="">
    <div class="info">
      <h1 style="margin-left: 40px; margin-top: 30px">Informações</h1>
      <div class="infos">
        <img src="/public/relogio.svg" alt="">
        <div class="text-info">
          <h3>Horario</h3>
          <p>Terça a Domingo: 9h às 17h</p>
          <p>Fechado às segundas-feiras</p>
        </div>
      </div>
      <div class="infos"><img src="/public/location.svg" alt="">
        <div class="text-info">
          <h3>Localização</h3>
          <p>Rua Dona Francisca, 600</p>
          <p>Centro, Joinville - SC</p>
        </div>
      </div>
      <div class="infos"><img src="/public/phone.svg" alt="">
        <div class="text-info">
          <h3>Telefone</h3>
          <p>(47) 3433-3000</p>
        </div>
      </div>
      <div class="infos"><img src="/public/mail.svg" alt="">
        <div class="text-info">
          <h3>Contato</h3>
          <p>contato@museusambaqui.org.br</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 1344px;
  height: 445px;
  margin: auto;
  display: flex;
  gap: 75px;
}

.image {
  width: 60%;
  height: 100%;
  border-radius: 10px;
}

.info {
  width: 40%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08); /* sombra leve */

}

img {
  width: 100%;
  height: 100%;
}

.infos {
  display: flex;
  gap: 35px;
  margin-top: 30px;
  align-items: center;
  margin-left: 45px;
}
.infos>img {
  width: 40px;
  height: 40px;
}
.text-info > h3{
  font-size: 15px;
  font-weight: 900;
}
.text-info > p{
  font-size: 15px;
}
</style>
