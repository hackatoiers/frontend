<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const conchas = ref(null);


const interactiveEl = ref(null);

let mouseMoveHandler;
let handleScroll;

onMounted(() => {
    // scroll handler
    handleScroll = () => {
        const c1 = conchas.value;
        const scrollY = window.scrollY || window.pageYOffset || 0;
        if (c1) c1.style.transform = `translateY(${scrollY * 0.2}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    // interactive bubble
    const interBubble = interactiveEl.value;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;

        if (interBubble) {
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        }

        requestAnimationFrame(move);
    };

    mouseMoveHandler = (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    move();
});

onBeforeUnmount(() => {
    if (handleScroll) {
        window.removeEventListener("scroll", handleScroll);
    }
    if (mouseMoveHandler) {
        window.removeEventListener("mousemove", mouseMoveHandler);
    }
});
</script>

<template>
    <main>
        <div class="text-container">
            <div class="text-content">
                <div class="title-home">
                    <h1 class="bodoni-moda">
                        Bem Vindo
                    </h1>
                </div>

                <div class="description-home">
                    <p class="text-home">Sambaquis são sítios arqueológicos formados por conchas e vestígios deixados
                        por
                        antigos povos do
                        litoral, revelando sua história e modo de vida.
                    </p>
                </div>
            </div>
        </div>
        <div class="concha-container" ref="conchas">
            <div class="concha-1">
                <img class="imagem-concha" src="../../../public/concha-1.png">
            </div>
            <div class="concha-2">
                <img class="imagem-concha" src="../../../public/concha-2.png">
            </div>
            <div class="concha-3">
                <img class="imagem-concha" src="../../../public/concha-3.png">
            </div>
            <div class="concha-4">
                <img class="imagem-concha" src="../../../public/concha-4.png">
            </div>
            <div class="concha-5">
                <img class="imagem-concha" src="../../../public/concha-2.png">
            </div>
            <div class="concha-6">
                <img class="imagem-concha" src="../../../public/concha-3.png">
            </div>
        </div>
        <img class="texture" src="/public/Textura areia.png" alt="">
        <div class="gradient-overlay"></div>

        <div class="gradient-bg">
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  
                                    0 1 0 0 0  
                                    0 0 1 0 0  
                                    0 0 0 18 -8" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>

            <div class="gradients-container">
                <div class="g1"></div>
                <div class="g2"></div>
                <div class="g3"></div>
                <div class="g4"></div>
                <div class="g5"></div>
                <div class="interactive" ref="interactiveEl"></div>
            </div>
        </div>
    </main>
    <div style="height: 100vh;">a</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz@6..96&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alan+Sans:wght@300..900&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');

main {
    width: 100%;
    overflow-x: hidden;
}

.texture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 1;
    pointer-events: none;
    opacity: 0.1;
}

.bodoni-moda {
    font-family: "Bodoni Moda", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 240px;
    color: rgb(0, 0, 0);
    width: 100%;
    text-align: center;
    z-index: 1000;
}

.concha-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
}

.imagem-concha {
    width: 90%;
    height: 90%;
    object-fit: contain;
}

.concha-3 {
    grid-column: 1;
    grid-row: 4 / span 1;
    width: 100%;
    height: 100%;
}


.concha-2 {
    grid-column: 3;
    grid-row: 5;
    width: 80%;
    height: 80%;
}

.concha-4 {
    grid-column: 2;
    grid-row: 2;
    width: 100%;
    height: 100%;
}

.concha-1 {
    grid-column: 6;
    grid-row: 4;
    width: 100%;
    height: 100%;
}

.concha-5 {
    grid-column: 4;
    grid-row: 2;
    width: 80%;
    height: 80%;
}

.concha-6 {
    grid-column: 7;
    grid-row: 2 / span 2;
    width: 100%;
    height: 100%;
}



.text-home {
    font-size: 20px;
    color: black;
}

.title-home {
    width: 92%;
}

.description-home {
    width: 60%;
    margin-left: 3rem;
}

html,
body {
  font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
}

.gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    background: url('/sand.jpg') repeat;
    opacity: 0.15;
    mix-blend-mode: overlay;
}

.text-container {
    z-index: 5;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    font-size: 96px;
    color: white;

    user-select: none;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.1);
}

:root {
    --color-bg1: rgb(255, 222, 160);
    /* areia clara quente */
    --color-bg2: rgb(245, 205, 130);
    /* areia mais densa */

    /* BLOB G1 — Areia muito clara (quase branca) */
    --color1: 255, 245, 220;

    /* BLOB G2 — Areia clara */
    --color2: 242, 225, 185;

    /* BLOB G3 — Areia média dourada */
    --color3: 230, 205, 160;

    /* BLOB G4 — Areia profunda, puxando para o ocre */
    --color4: 210, 180, 130;

    /* BLOB G5 — Areia escura / terracota suave */
    --color5: 185, 145, 95;

    /* BLOB INTERATIVO — Areia muito clara destacada */
    --color-interactive: 255, 250, 235;
}


.gradient-bg {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: linear-gradient(40deg, var(--color-bg1), var(--color-bg2));
    top: 0;
    left: 0;
}

.gradient-bg svg {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
}

.gradients-container {
    filter: url(#goo) blur(40px);
    width: 100%;
    height: 100%;
}

.g1,
.g2,
.g3,
.g4,
.g5,
.interactive {
    position: absolute;
    mix-blend-mode: var(--blending);
}

.g1 {
    background: radial-gradient(circle at center, rgba(var(--color1), 0.8) 0, rgba(var(--color1), 0) 50%) no-repeat;
    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);
    transform-origin: center center;
    animation: moveVertical 30s ease infinite;
    opacity: 1;
}

.g2 {
    background: radial-gradient(circle at center, rgba(var(--color2), 0.8) 0, rgba(var(--color2), 0) 50%) no-repeat;
    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);
    transform-origin: calc(50% - 400px);
    animation: moveInCircle 20s reverse infinite;
    opacity: 1;
}

.g3 {
    background: radial-gradient(circle at center, rgba(var(--color3), 0.8) 0, rgba(var(--color3), 0) 50%) no-repeat;
    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2 + 200px);
    left: calc(50% - var(--circle-size) / 2 - 500px);
    transform-origin: calc(50% + 400px);
    animation: moveInCircle 40s linear infinite;
    opacity: 1;
}

.g4 {
    background: radial-gradient(circle at center, rgba(var(--color4), 0.8) 0, rgba(var(--color4), 0) 50%) no-repeat;
    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);
    transform-origin: calc(50% - 200px);
    animation: moveHorizontal 40s ease infinite;
    opacity: 0.7;
}

.g5 {
    background: radial-gradient(circle at center, rgba(var(--color5), 0.8) 0, rgba(var(--color5), 0) 50%) no-repeat;
    width: calc(var(--circle-size) * 2);
    height: calc(var(--circle-size) * 2);
    top: calc(50% - var(--circle-size));
    left: calc(50% - var(--circle-size));
    transform-origin: calc(50% - 800px) calc(50% + 200px);
    animation: moveInCircle 20s ease infinite;
    opacity: 1;
}

.interactive {
    background: radial-gradient(circle at center, rgba(var(--color-interactive), 0.8) 0, rgba(var(--color-interactive), 0) 50%) no-repeat;
    width: 100%;
    height: 100%;
    top: -50%;
    left: -50%;
    opacity: 0.7;
}

@keyframes moveInCircle {
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(180deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes moveVertical {
    0% {
        transform: translateY(-50%);
    }

    50% {
        transform: translateY(50%);
    }

    100% {
        transform: translateY(-50%);
    }
}

@keyframes moveHorizontal {
    0% {
        transform: translateX(-50%) translateY(-10%);
    }

    50% {
        transform: translateX(50%) translateY(10%);
    }

    100% {
        transform: translateX(-50%) translateY(-10%);
    }
}

@media (max-width: 768px) {
    .bodoni-moda {
        font-size: 120px;
        text-align: left;

    }

    .description-home {
        width: 80%;
        margin-left: 1rem;
    }

    .text-home {
        font-weight: 300px;
        font-size: 16px;
        text-align: left;
    }

    .concha-container {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }

    .concha-container {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }

    .concha-1 {
        grid-column: 6;
        grid-row: 5;
        justify-self: end;
    }

    .concha-2 {
        grid-column: 3;
        grid-row: 5; 
        justify-self: start;
    }

    .concha-3 {
        grid-column: 1;
        grid-row: 3;
        justify-self: start;
    }

    .concha-4 {
        grid-column: 6;
        grid-row: 2;
        justify-self: end;
    }

    .concha-5 {
        grid-column: 2;
        grid-row: 1;
        justify-self: start;
    }

    .concha-6 {
        grid-column: 5;
        grid-row: 1;
        justify-self: end;
    }

    .concha-container img {
        width: 140%;
        height: 140%;
    }
}
</style>
