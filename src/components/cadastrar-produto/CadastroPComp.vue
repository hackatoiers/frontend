<script setup>
</script>

<template>
    <form class="container-cadastro-produto">
        <div class="dados-cadastro-produto">
            <div class="primeira-parte-form">
                <div class="imagem-primaria-container">
                    <div class="imagem-primaria">
                        <img src="../../../public/uplod-img.png" alt="">
                    </div>
                </div>
                <div class="imagens-secundarias-container">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="segunda-parte-form">
                <div>
                    <label>Nome</label>
                    <input type="text" placeholder="Escreva o nome aqui" />
                </div>
                <div>
                    <label>Descrição</label>
                    <input class="desc" type="text" placeholder="Escreva sua descrição aqui" />
                </div>
                <div>
                    <label>Sala</label>
                    <input type="text" placeholder="Escreva a localização aqui" />
                </div>
                <div>
                    <label>Procedência (Local de Coleta)</label>
                    <input type="text" placeholder="Escreva a localização aqui" />
                </div>


                <div class="select-option">
                    <label class="b">Estado</label>
                    <label class="radio-label">
                        <input type="radio" name="estado" value="ruim">
                        Ruim
                    </label>
                    <label class="radio-label">
                        <input type="radio" name="estado" value="regular">
                        Regular
                    </label>
                    <label class="radio-label">
                        <input type="radio" name="estado" value="bom">
                        Bom
                    </label>
                </div>
            </div>

            <div class="terceira-parte-form">
                <div>
                    <div>
                        <label>Peso</label>
                        <input type="number" placeholder="Escreva o peso aqui" />
                    </div>
                    <div>
                        <label>Nome</label>
                        <input type="number" placeholder="Escreva o número aqui" />
                    </div>
                </div>
                <div class="selects-terceira-parte">
                    <div class="custom-select">
                        <select name="estado1">
                            <option value="" disabled selected>Selecione o material</option>
                            <option value="ruim">Animal</option>
                            <option value="regular">Vegetal</option>
                            <option value="bom">Mineral</option>
                        </select>
                    </div>

                    <div class="custom-select">
                        <select name="estado2">
                            <option value="" disabled selected>Sub-Grupo</option>
                            <option value="ruim">Todos os campos do banco</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="botoes-cadastro">
            <div>
                <button class="delete" type="button">Excluir</button>
            </div>
            <div>
                <button class="add" type="submit">Adicionar ao acervo</button>
            </div>
        </div>
    </form>
</template>

<style>
.container-cadastro-produto {
    width: 1760px;
    height: 800px;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    margin: 2rem;
    border-radius: 10px;
    border: 2px solid #E2E8F0;
}

.dados-cadastro-produto {
    width: 100%;
    height: 90%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
}

.botoes-cadastro {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
}

.primeira-parte-form {
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 10px;
}

.segunda-parte-form {
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 10px;
}

.terceira-parte-form {
    width: 25%;
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    border-radius: 10px;
}

.terceira-parte-form div {
    display: flex;
    height: 8rem;
    flex-direction: column;
    gap: 0.5rem;
}


.imagem-primaria-container {
    width: 100%;
    height: 75%;
    border-radius: 10px;

}

.imagens-secundarias-container {
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.imagem-primaria {
    width: 100%;
    height: 100%;
    border: 2px solid #E2E8F0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.imagens-secundarias-container div {
    width: 23%;
    height: 80%;
    border: 2px solid #E2E8F0;
    display: inline-block;
    border-radius: 10px;
}

label {
    font-size: 18px;
    color: black;
}

input,
textarea {
    width: 100%;
    height: 3rem;
    border-radius: 5px;
    border: 1px solid #CBD5E1;
    padding: 0.5rem;
    font-size: 16px;
}

.desc {
    height: 5rem;
    padding-bottom: 3rem;
}

input::placeholder {
    color: #94A3B8;
}

.segunda-parte-form div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}


.select-option {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
}

.radio-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 16px;
}

.select-option input[type="radio"] {
    width: 16px;
    height: 16px;
    accent-color: #000000;
    color: #94A3B8;
}

.selects-terceira-parte {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.custom-select {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.custom-select select {
    width: 100%;
    height: 3rem;
    padding: 0.5rem;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #CBD5E1;
    background-color: white;
    cursor: pointer;
}

.custom-select select:focus {
    outline: none;
    border-color: #1E40AF;
}

option {
    width: 1rem;
}

.delete {
    padding: 10px 20px;
    background-color: #EF4444;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.25s ease;
}

.add {
    padding: 10px 20px;
    background-color: #10B981;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.25s ease;
}
</style>
