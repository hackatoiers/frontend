<script setup>
const nome = [
  { img: 'Vector.svg', item: 'Adicionar item' },
  { img: 'scroll.svg', item: 'Ver todos os itens' },
  { img: 'user-plus.svg', item: 'Ver todos os usuários' },
  { img: 'sheet.svg', item: 'Reservas' },
]
const onCardClick = (item) => {
  console.log('card clicked:', item)
}

const onUserClick = () => {
  console.log('user button clicked')
}
</script>

<template>
  <div class="cards-dashboard">
    <div v-for="item in nome" :key="item.item" class="cards" @click="onCardClick(item)" tabindex="0" @keydown.enter="onCardClick(item)">
      <img v-if="item.img" :src="item.img" alt="" class="card-icon" />
      <h3>{{ item.item }}</h3>
      <button class="card-button" @click.stop="onCardClick(item)">Acessar</button>
    </div>
  </div>
  <div class="align-button">
    <button class="user-button" @click="onUserClick">
      <img src="/user-button.svg" alt="Sua conta" />
      <span>Sua conta</span>
    </button>
  </div>
</template>

<style scoped>

.cards-dashboard {
  display: flex;
  justify-content: center;
}

.cards-dashboard h3 {
  font-size: 18px;
  font-weight: 600;
  color: #554F48;
  gap: 10px;
  cursor: pointer;
}

.cards {
  width: 300px;
  height: 450px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  cursor: pointer;
}

.cards:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

.card-icon {
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
}

.align-button {
  width: 300px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5% 40%;
  background-color: #242221;
  color: #FFFFFF;
  cursor: pointer;
}

.align-button span {
  color: #FFFFFF;
}

.user-button {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: #000;
}

.user-button img {
  width: 20px;
  height: 20px;
}

.align-button img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

@media (max-width: 1085px) {
  .cards {
    width: 260px;
    height: 380px;
    margin: 15px;
  }

  .card-icon {
    width: 80px;
    height: 80px;
  }

  .cards-dashboard h3 {
    font-size: 16px;
  }

  .align-button {
    width: 260px;
    height: 45px;
    margin: 40px auto;
  }

  .user-button {
    font-size: 15px;
  }
}

@media (max-width: 940px) {
  .cards-dashboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px; /* opcional mas deixa mais bonito */
  }

  .cards {
    width: 40%;
    height: 300px;
    margin: 10px 0;
  }

  .card-icon {
    width: 70px;
    height: 70px;
  }

  .cards-dashboard h3 {
    font-size: 15px;
    text-align: center;
  }

  .align-button {
    width: 90%;
    height: 45px;
    margin: 30px auto;
  }

  .user-button {
    font-size: 16px;
  }
}

@media (max-width: 640px) {
  .cards-dashboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px; /* opcional mas deixa mais bonito */
  }

  .cards {
    width: 45%;   /* dois cards lado a lado */
    height: 230px;
    margin: 10px 0;
  }

  .card-icon {
    width: 50px;
    height: 50px;
  }

  .cards-dashboard h3 {
    font-size: 15px;
    text-align: center;
  }

  .align-button {
    width: 90%;
    height: 45px;
    margin: 30px auto;
  }

  .user-button {
    font-size: 16px;
  }
}
</style>
