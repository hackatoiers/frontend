<template>
  <div>

    <!-- CONTEÚDO DA TELA INICIAL (100vh) -->
    <div class="top-content">
      <h1>Conteúdo Inicial</h1>
      <p>Role para baixo para ver o efeito parallax do footer.</p>
    </div>

    <!-- FOOTER PARALLAX -->
    <footer class="footer">
      <div class="layer montanha" ref="montanha">
        <img src="/public/Montanhas.svg" alt="Montanha" />
      </div>

      <div class="layer texto" ref="texto">
        <span>SAMBAQUI</span>
      </div>

      <div class="layer pedra" ref="pedra">
        <img src="/public/Pedra.svg" alt="Pedra" />
      </div>

      <div class="layer grama" ref="grama">
        <img src="/public/Grama.svg" alt="Grama" />
      </div>
    </footer>

  </div>
</template>


<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const scroll = window.scrollY;

      // Fundo (quase parado)
      this.$refs.montanha.style.transform = `translateY(${scroll * 0.05}px)`;

      // Texto sobe rápido de trás da pedra
      const textoOffset = scroll * -0.52;
      this.$refs.texto.style.transform = `translateY(${textoOffset}px)`;

      // Pedra sobe devagar (texto aparece de trás dela)
      const pedraOffset = scroll * -0.12;
      this.$refs.pedra.style.transform = `translateY(${pedraOffset}px)`;

      // Grama (primeiro plano) sobe mais rápido
      const gramaOffset = scroll * -0.35;
      this.$refs.grama.style.transform = `translateY(${gramaOffset}px)`;
    },
  },
};
</script>


<style scoped>
/* SEÇÃO DE CONTEÚDO */
.top-content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ececec;
  text-align: center;
  padding: 20px;
}

/* FOOTER PARALLAX 100vh */
.footer {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

/* Camadas absolutas */
.layer {
  position: absolute;
  left: 0;
  width: 100%;
  will-change: transform;
  /* <-- deixa fluido e sem travar */
}

/* PROFUNDIDADE / VELOCIDADES */
.montanha {
  bottom: 0;
  z-index: 1;
}

/* Texto começa baixo para sair de trás da pedra */
.texto {
  bottom: -15vh;
  width: 100%;
  text-align: center;
  z-index: 2;
}

/* Pedra sobe pouco → texto aparece de trás dela */
.pedra {
  bottom: 0;
  z-index: 3;
}

/* Grama é o mais rápido*/
.grama {
  bottom: 0;
  z-index: 4;
}

/* Estilo do texto */
.texto span {
  font-size: 10vw;
  letter-spacing: 10px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  pointer-events: none;
}

/* Imagens */
.montanha img {
  height: 100vh;
  width: 100%;
  object-fit: cover;
  margin-bottom: -70px;
}

.pedra img {
  height: 50vh;
  width: 100%;
  object-fit: cover;
  margin-bottom: -200px;
}

.grama img {
  height: 40vh;
  width: 100%;
  object-fit: cover;
  margin-bottom: -300px;
}

/* Tablets e telas médias */
@media (max-width: 1024px) {
  .texto {
    bottom: -15vh;
  }

  .texto span {
    font-size: 12vw;
    letter-spacing: 1.8vw;
  }

  .pedra img {
    height: 22vh;
    margin-bottom: -10px;
  }

  .grama img {
    margin-top: 100px;
    height: 25vh;
  }

  .montanha img {
    height: 90vh;
    margin-bottom: -60px;
  }
}
</style>
