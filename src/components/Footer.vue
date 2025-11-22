<script>
// export default {
//   mounted() {
//     window.addEventListener("scroll", this.handleScroll);
//   },

//   beforeUnmount() {
//     window.removeEventListener("scroll", this.handleScroll);
//   },

//   methods: {
//     handleScroll() {
//       const scroll = window.scrollY;

//       // Fundo (quase parado)
//       this.$refs.montanha.style.transform =
//         `translateY(${scroll * 0.05}%)`;

//       // Texto (sobe mais rápido)
//       this.$refs.texto.style.transform =
//         `translateY(${scroll * - 10}%)`;

//       // Pedra
//       this.$refs.pedra.style.transform =
//         `translateY(${scroll * 12}%)`;

//       // Grama
//       this.$refs.grama.style.transform =
//         `translateY(${scroll * - 30}%)`;
//     },
//   },
// };
</script>

<template>
  <div>

    <footer class="footer">
      <div class="layer texto" ref="texto">
        <span>SAMBAQUI</span>
      </div>
      <div class="layer grama" ref="grama">
        <img src="/public/Frente.png" alt="Grama" />
        <div class="footer-links">
          <h2>Links</h2>

          <div class="links-columns">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Animal</a></li>
              <li><a href="#">Vegetal</a></li>
            </ul>

            <ul>
              <li><a href="#">Mineral</a></li>
              <li><a href="#">Outros</a></li>
              <li><a href="#">Itens</a></li>
            </ul>
          </div>
        </div>

         <div class="layer texto" ref="texto">
        <span>SAMBAQUI</span>
      </div>
      </div>

    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alan+Sans:wght@300..900&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');

/* ============================================================
   TOP CONTENT APAGAR DEPOIS
============================================================ */
.top-content {
  height: 100vh;
  background: #ececec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}
.footer {
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;
}
.layer {
  position: absolute;
  left: 0;
  width: 100%;
  will-change: transform;
}
.montanha {
  bottom: 0;
  z-index: 1;
}
.montanha img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  margin-bottom: -300px;
}
.texto {
  bottom: 5vh;
  width: 100%;
  text-align: center;
  z-index: 2;
}

.texto span {
  pointer-events: none;
  font-size: 7vw;
  font-weight: 900;
  color: white;
  font-family: "Bodoni Moda", serif;
  text-decoration: border(1px solid);
}

.grama {
  bottom: 0;
  z-index: 3;
}

.grama img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 0px;
}

.grama p {
  position: absolute;
  bottom: 4vh;
  width: 100%;
  text-align: center;
  font-family: 'Alan Sans', sans-serif;
  font-weight: 600;
  color: white;
}
.footer-links {
  position: absolute;
  bottom: 3vh;
  margin-left: 15vw;
  width: 100%;
  color: white;
}

.footer-links h2 {
  font-weight: 700;
  margin-bottom: 2vh;
  margin-left: 1vw;
}

.links-columns {
  display: flex;
  gap: 20px;
}

.links-columns ul {
  list-style: none;
  padding: 0;
  margin-left: 1vw;
}

.links-columns li {
  margin-bottom: 1.2vh;
}

.links-columns a {
  color: white;
  text-decoration: none;
}

@media (max-width: 1024px) {
  .texto {
    bottom: -25vh;
  }

  .texto span {
    font-size: 12vw;
    letter-spacing: 1.8vw;
  }

  .grama img {
    margin-top: 100px;
    height: 25vh;
  }

  .montanha img {
    height: 90vh;
    margin-bottom: -60px;
  }

  .footer-links {
    margin-bottom: 5vh;
    font-size: 12px;
  }
}

@media (max-width: 760px) {
  .footer-links {
    margin-bottom: 5vh;
    font-size: 12px;
  }

  .layer.texto {
    bottom: -25vh;
  }

  p {
    font-size: 12px;
  }

  .grama img {
    margin-bottom: -100px;
  }
}
</style>
