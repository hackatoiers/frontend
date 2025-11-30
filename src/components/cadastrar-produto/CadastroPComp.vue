<script setup>
import { ref, onMounted } from 'vue';

import { useItemStore } from '@/stores/items';
import { useCollectionStore } from '@/stores/collections';
import { useSubTypeStore } from '@/stores/subtype';
import { useLocationsStore } from '@/stores/locations';
import { usePhotosStore } from '@/stores/photos';
import { useEhtnicGroupsStore } from '@/stores/ethnicGorups';

const itemStore = useItemStore();
const subTypeStore = useSubTypeStore();
const collectionStore = useCollectionStore();
const locationsStore = useLocationsStore();
const photoStore = usePhotosStore();
const ethnicGroupsStore = useEhtnicGroupsStore();

const form = ref({
    name: '',
    description: '',
    number: '',
    
    length: null,
    height: null,
    width: null,
    weight: null,

    archeological_site: '',
    technic: '',
    reference: '',

    integrity: '',
    conservation_state: '',
    conservation_detail: '',

    location_id: null,
    subtype_id: null,
    collection_id: null,
    ethnic_group_id: null,
});

const locationForm = ref({
    name: '',
    city: '',
    state: '',
    country: '',
    room: '',
    shelf: '',
    bookcase: '',
});

const images = ref([]);
const previewImages = ref([]);

function handleImageUpload(e) {
    const files = Array.from(e.target.files);
    images.value.push(...files);

    files.forEach(file => {
        previewImages.value.push(URL.createObjectURL(file));
    });
}

async function handleSubmit() {
    try {
        const location = await locationsStore.create(locationForm.value);
        form.value.location_id = location.data.data.id;

        const item = await itemStore.create(form.value);

        for (const img of images.value) {
            const fd = new FormData();
            fd.append('photo', img);
            fd.append('item_id', item.data.data.id);

            await photoStore.create(fd);
        }

        alert("Item criado com sucesso!");

    } catch (err) {
        console.error(err);
        alert("Erro ao cadastrar");
    }
}

onMounted(async () => {
    await collectionStore.fetchAll();
    await subTypeStore.fetchAll();
    await ethnicGroupsStore.fetchAll();
});
</script>

<template>
<form @submit.prevent="handleSubmit" class="container-cadastro-produto">
    <div class="upload-box">
        <label>Imagens do Item</label>
        <input type="file" multiple accept="image/*" @change="handleImageUpload" />
    </div>

    <div class="preview-container">
        <img 
            v-for="(img, index) in previewImages"
            :key="index"
            :src="img"
            class="preview-img"
        />
    </div>

    <div class="dados-cadastro-produto">

        <div class="segunda-parte-form">

            <div>
                <label>Nome*</label>
                <input v-model="form.name" required />
            </div>

            <div>
                <label>Descrição</label>
                <input v-model="form.description" />
            </div>

            <div>
                <label>Número*</label>
                <input v-model="form.number" required />
            </div>

            <div>
                <label>Comprimento</label>
                <input type="number" v-model.number="form.length" />
            </div>

            <div>
                <label>Largura</label>
                <input type="number" v-model.number="form.width" />
            </div>

            <div>
                <label>Altura</label>
                <input type="number" v-model.number="form.height" />
            </div>

            <div>
                <label>Peso*</label>
                <input type="number" v-model.number="form.weight" required />
            </div>

            <div>
                <label>Sítio Arqueológico*</label>
                <input v-model="form.archeological_site" required />
            </div>

            <div>
                <label>Técnica*</label>
                <input v-model="form.technic" required />
            </div>

            <div>
                <label>Referência*</label>
                <input v-model="form.reference" required />
            </div>

            <div>
                <label>Integridade*</label>
                <select v-model="form.integrity" required>
                    <option disabled value="">Selecione</option>
                    <option value="fragmented">Fragmentado</option>
                    <option value="regular">Regular</option>
                </select>
            </div>

            <div>
                <label>Estado de Conservação*</label>
                <select v-model="form.conservation_state" required>
                    <option disabled value="">Selecione</option>
                    <option value="good">Bom</option>
                    <option value="regular">Regular</option>
                    <option value="bad">Ruim</option>
                </select>
            </div>

            <div>
                <label>Detalhes de Conservação*</label>
                <input v-model="form.conservation_detail" required />
            </div>

            <div>
                <label>Subtipo*</label>
                <select v-model="form.subtype_id" required>
                    <option disabled value="">Selecione</option>
                    <option
                        v-for="s in subTypeStore.state.subtype"
                        :key="s.id"
                        :value="s.id"
                    >
                        {{ s.name }}
                    </option>
                </select>
            </div>

            <div>
                <label>Coleção*</label>
                <select v-model="form.collection_id" required>
                    <option disabled value="">Selecione</option>
                    <option
                        v-for="c in collectionStore.state.collections"
                        :key="c.id"
                        :value="c.id"
                    >
                        {{ c.name }}
                    </option>
                </select>
            </div>

            <div>
                <label>Grupo Étnico*</label>
                <select v-model="form.ethnic_group_id" required>
                    <option disabled value="">Selecione</option>
                    <option 
                        v-for="e in ethnicGroupsStore.state.ethnicGroups"
                        :key="e.id"
                        :value="e.id"
                    >
                        {{ e.name }}
                    </option>
                </select>
            </div>
        </div>
        <div class="terceira-parte-form">
            <h3>Localização</h3>

            <div>
                <label>Nome*</label>
                <input v-model="locationForm.name" required />
            </div>

            <div>
                <label>Cidade*</label>
                <input v-model="locationForm.city" required />
            </div>

            <div>
                <label>Estado*</label>
                <input v-model="locationForm.state" required />
            </div>

            <div>
                <label>País*</label>
                <input v-model="locationForm.country" required />
            </div>

            <div>
                <label>Sala / Room*</label>
                <input v-model="locationForm.room" required />
            </div>

            <div>
                <label>Prateleira / Shelf*</label>
                <input v-model="locationForm.shelf" required />
            </div>

            <div>
                <label>Estante / Bookcase*</label>
                <input v-model="locationForm.bookcase" required />
            </div>

        </div>
    </div>

    <div class="botoes-cadastro">
        <button class="add" type="submit">Adicionar ao acervo</button>
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
