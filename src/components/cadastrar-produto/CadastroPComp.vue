<script setup>
import { useItemStore } from '@/stores/items';
import { useCollectionStore } from '@/stores/collections';
import { useSubTypeStore } from '@/stores/subtype';
import { onMounted } from 'vue';

const itemStore = useItemStore();
const collectionStore = useCollectionStore();
const subTypeStore = useSubTypeStore();

const form = {
    name: '',
    description: '',
    location: '',
    provenance: '',
    condition: '',
    weight: null,
    materialType: '',
    subGroup: ''
};

onMounted(async () => {
    await collectionStore.fetchAll();
    await subTypeStore.fetchAll();
});

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
                    <label>Numero*</label>
                    <input class="desc" type="text" placeholder="Escreva o numero aqui" />
                </div>
                <div>
                    <label>Comprimento</label>
                    <input type="text" placeholder="Escreva o comprimento aqui" />
                </div>
                <div>
                    <label>Largura</label>
                    <input type="text" placeholder="Escreva o comprimento aqui" />
                </div>
                <div>
                    <label>Altura</label>
                    <input type="text" placeholder="Escreva a altura aqui" />
                </div>
                <div>
                    <label>Cidade</label>
                    <input type="text" placeholder="Escreva a cidade aqui" />
                </div>
                <div>
                    <label>Estado</label>
                    <input type="text" placeholder="Escreva o estado aqui" />
                </div>
                <div>
                    <label>País</label>
                    <input type="text" placeholder="Escreva o país aqui" />
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
                            <option v-for="subtype in subTypeStore.state.subtypes" :key="subtype.id" :value="subtype.id">
                                {{ subtype.name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div>
                    <label>Sala</label>
                    <input type="text" placeholder="Escreva a sala aqui" />
                </div>
                <div>
                    <label>Estante</label>
                    <input type="text" placeholder="Escreva a estante aqui" />
                </div>
                <div>
                    <label>Prateleira</label>
                    <input type="text" placeholder="Escreva a prateleira aqui" />
                </div>
                <div>
                    <label>Tecnico</label>
                    <input type="text" placeholder="Escreva o nome do técnico aqui" />
                </div>

                <div>
                    <label>Referencia</label>
                    <input type="text" placeholder="Escreva a referência aqui" />
                </div>
                <div>
                    <label>Sitio</label>
                    <input type="text" placeholder="Escreva o sitio aqui" />
                </div>
                <div class="custom-select">
                    <select name="estado1">
                        <option value="" disabled selected>Selecione a coleção</option>
                        <option v-for="collection in collectionStore.state.collections" :key="collection.id" :value="collection.id">
                            {{ collection.name }}
                        </option>
                    </select>
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
    width: 90%;
    max-width: 1760px;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    margin: 2rem auto;
    border-radius: 10px;
    border: 2px solid #E2E8F0;
    box-sizing: border-box;
}

.dados-cadastro-produto {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    background-color: white;
    border-radius: 10px;
    padding: 1rem;
    box-sizing: border-box;
}

.botoes-cadastro {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
}

.primeira-parte-form,
.segunda-parte-form,
.terceira-parte-form {
    flex: 1 1 300px;
    /* cresce, encolhe, base mínima 300px */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 10px;
    min-width: 250px;
}

.terceira-parte-form div {
    display: flex;
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
    box-sizing: border-box;
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

@media screen and (max-width: 1400px) {
    .dados-cadastro-produto {
        flex-direction: row;
        flex-wrap: wrap;
    }
}

@media screen and (max-width: 900px) {
    .dados-cadastro-produto {
        flex-direction: column;
    }

    .primeira-parte-form,
    .segunda-parte-form,
    .terceira-parte-form {
        width: 100%;
    }
}
</style>
