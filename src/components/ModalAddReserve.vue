<script setup>
const emit = defineEmits(["close"])

function handleCancel() {
  emit("close")
}
</script>

<template>
  <div class="background">
    <div class="reserva-container">
      <h2>Reservar</h2>

      <form class="form">
        <div class="input-group email">
          <label>Email do destinatário</label>
          <input type="email" placeholder="Email aqui" />
        </div>

        <div class="input-group">
          <label>Data de entrega</label>
          <input type="date" />
        </div>

        <div class="input-group">
          <label>Data de devolução</label>
          <input type="date" />
        </div>
      </form>

      <div class="buttons">
        <button class="cancel" @click="handleCancel">Cancelar</button>
        <button class="confirm" @click="handleCancel">Reservar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* seu CSS permanece exatamente igual */
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.reserva-container {
  width: 800px;
  padding: 30px 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}
.form {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 180px 180px;
  column-gap: 20px;
  row-gap: 10px;
  margin-bottom: 30px;
}
.input-group { display: flex; flex-direction: column; }
.input-group.email { grid-column: span 1; }
label { font-size: 14px; margin-bottom: 5px; }
input {
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  padding: 10px;
  font-size: 14px;
  outline: none;
}
input:focus { border-color: #007bff; }
.buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}
.cancel {
  background: #d9534f;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 8px;
  cursor: pointer;
}
.confirm {
  background: #ff7a00;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
