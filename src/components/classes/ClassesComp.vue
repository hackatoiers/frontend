<script setup>
</script>

<template>
    <p class="title">Classes</p>
    <div class="container-n-classes">
        <div class="classes-comp" :style="{ backgroundImage: 'url(/animal.png)' }">
            <div class="class-info">
                <div class="class-title">
                    <h2>Animal</h2>
                </div>
                <div class="class-description">
                    <p>Restos ou vestígios de animais antigos, como ossos de dinossauros ou conchas fossilizadas.</p>
                </div>
            </div>
        </div>

        <div class="classes-comp" :style="{ backgroundImage: 'url(/vegetal.png)' }">
            <div class="class-info">
                <div class="class-title">
                    <h2>Vegetal</h2>
                </div>
                <div class="class-description">
                    <p>Restos de plantas do passado, como folhas ou troncos petrificados, que mostram a evolução da
                        flora.</p>
                </div>
            </div>
        </div>

        <div class="classes-comp" :style="{ backgroundImage: 'url(/mineral.png)' }">
            <div class="class-info">
                <div class="class-title">
                    <h2>Mineral</h2>
                </div>
                <div class="class-description">
                    <p>Substâncias formadas a partir de minerais nos organismos, como ossos mineralizados ou âmbar que
                        preserva insetos.</p>
                </div>
            </div>
        </div>
    </div>
    <p class="sub">Outros</p>
</template>
<style scoped>
.sub {
    font-size: 20px;
    margin: auto;
    width: 5%;
    font-weight: bold;
    text-align: center;
    margin-top: 2rem;
    color: #24222199;
    border-bottom: 2px solid #24222199;
}
.title {
    font-size: 24px;
    margin: auto;
    width: 5%;
    font-weight: bold;
    text-align: center;
    margin-top: 2rem;
    color: black;
    border-bottom: 2px solid black;
}
.container-n-classes {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    margin: 2rem;
    gap: 9rem;
    width: 80%;
    margin: 0 auto
}

.classes-comp {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 500px;
    width: 400px;
    padding: 1rem;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    transition: background-size 0.4s ease;
    border-radius: 10px;
}

.classes-comp:hover {
    background-size: 115%;
    /* zoom interno */
}

.class-info {
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
    font-size: 15px;
    color: rgba(85, 79, 72, 1);
}

p {
    font-size: 15px;
    color: rgba(85, 79, 72, 0.6);
    margin-top: 0.5rem;
}
</style>