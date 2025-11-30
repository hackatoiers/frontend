<script setup></script>

<template>
  <div class="content">
    <div class="image">
    <img src="/public/img-section3.svg" alt="">
    </div>
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
  width: 80%;
  height: 445px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 2fr 1fr; /* ← AQUI ESTÁ O 2fr / 1fr */
  gap: 75px;
  align-items: stretch; /* ← garante mesma altura */

}

.image {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.info {
  border-radius: 10px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  padding-bottom: 20px;
}

.infos {
  display: flex;
  gap: 35px;
  margin-top: 30px;
  align-items: center;
  margin-left: 45px;
}
.text-info > h3,p{
  font-size: 15px;
}
.infos > img {
  width: 40px;
  height: 40px;
}

/* RESPONSIVO */
@media screen and (max-width: 1024px) {
  .content {
    grid-template-columns: 1fr;
    height: auto;
    gap: 30px;
    justify-items: center; /* <- centraliza no grid */

  }
  .info{
    width: 100%;
  }
  .image {
    width: 100%;
  }
  .infos{
    margin-top: 25px;
  }
  .infos > img{
    width: 30px;
    height: 30px;
  }
  .text-info > h3,p{
  font-size: 15px;
}
}
</style>
