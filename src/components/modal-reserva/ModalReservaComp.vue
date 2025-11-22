<template>
  <div v-if="open" class="overlay">
    <div class="modal">
      <div class="header-modal">
        <h2>Reservar</h2>
      </div>
      <form class="form">
        <div class="email-box">
          <label>Email do destinatário</label>
          <input type="email" placeholder="Email aqui" />
        </div>

        <div class="datas">
          <div class="data-entrega">
            <label>Data de entrega</label>
            <input type="text" placeholder="00/00/0000" />
          </div>

          <div class="data-devolucao">
            <label>Data de devolução</label>
            <input type="text" placeholder="00/00/0000" />
          </div>
        </div>

        <div class="buttons">
          <button type="button" class="cancel" @click="$emit('close')">
            Cancelar
          </button>

          <button type="button" class="reservar">
            Reservar
          </button>
        </div>

      </form>

    </div>
  </div>
</template>

<script setup>
defineProps({
  open: Boolean
})
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal {
  width: 800px;
  background: white;
  padding: 40px;
  border-radius: 14px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  animation: fadeIn .2s ease-out;
}

.modal h2 {
  text-align: center;
  font-size: 26px;
  margin-bottom: 26px;
  font-weight: 600;
}


.form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.email-box input,
.datas input {
  width: 100%;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  font-size: 15px;
}

.data-devolucao,
.data-entrega {
  width: 50%;
}

label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
}


.datas {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}


.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

button {
  padding: 10px 26px;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  border: none;
}

.cancel {
  background: #d9534f;
  color: white;
}

.cancel:hover {
  background: #c64542;
}

.reservar {
  background: #f4a236;
  color: white;
}

.reservar:hover {
  background: #db8c25;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(.96);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}


@media (max-width: 1024px) {
  .modal {
    width: 80%;
    padding: 20px;
  }

  .datas {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .data-entrega,
  .data-devolucao {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .modal {
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 0;
  }

  .datas {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
  }

  .data-entrega,
  .data-devolucao, .email-box {
    width: 90%;
  }

  .form {
    height: 60%;
    align-items: center;  
    justify-content: center;

  }


  .buttons {
      flex-direction: column-reverse;
      width: 90%;
  }

  .header-modal {
    font-size: 50px;
    height: 25%;
    align-items: end;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: end;
  }
  
}
</style>