<script setup>
import api from '@/plugins/api';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { onMounted, ref, watch } from 'vue';
import { useMaterialStore } from '@/stores/materials';

const materialStore = useMaterialStore();

onMounted(async () => {
  await materialStore.fetchAll();
});

const items = ref([]);
watch(
  () => materialStore.state.materials,
  (newItems) => {
    items.value = newItems;
  },
  { immediate: true }
);

const categories = [
  {
    id: 1, name: 'Category 1',
  },
  {
    id: 2, name: 'Category 2',
  },
  {
    id: 3, name: 'Category 3',
  },
  {
    id: 4, name: 'Category 4',
  },

];

function hdlClk() {
      const url = api.defaults.baseURL + `/items/export`;
    window.open(url, '_blank');
}


</script>
<template>
  <div class="side">
    <div class="title">
      <p>Filtro</p>
    </div>
    <Select>
      <SelectTrigger class="w-[285px]">
        <SelectValue placeholder="Matéria Prima" class="fe" />
      </SelectTrigger>
      <SelectContent class="w-[285px]">
        <SelectGroup class="fe">
          <SelectLabel class="ai">Matéria Prima</SelectLabel>
          <SelectItem v-for="cat in items" :key="cat.id" :value="cat.id" class="ai">
            {{ cat.name }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Select>
      <SelectTrigger class="w-[285px]">
        <SelectValue placeholder="Sub-tipo" class="fe" />
      </SelectTrigger>
      <SelectContent class="w-[285px]">
        <SelectGroup class="fe">
          <SelectLabel class="ai">Sub-tipo</SelectLabel>
          <SelectItem v-for="cat in categories" :key="cat.id" :value="cat.id" class="ai">
            {{ cat.name }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Select>
      <SelectTrigger class="w-[285px]">
        <SelectValue placeholder="Localização" class="fe" />
      </SelectTrigger>
      <SelectContent class="w-[285px]">
        <SelectGroup class="fe">
          <SelectLabel class="ai">Localização</SelectLabel>
          <div class="line"><label for="">N° sala:</label><input type="text" placeholder="000"></div>
          <div class="line"><label for="">Estante:</label><input type="text" placeholder="000"></div>
          <div class="line"><label for="">Prateleira:</label><input type="text" placeholder="000"></div>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Select>
      <SelectTrigger class="w-[285px]">
        <SelectValue placeholder="Estado" class="fe" />
      </SelectTrigger>
      <SelectContent class="w-[285px]">
        <SelectGroup class="fe">
          <SelectLabel class="ai">Estado</SelectLabel>
          <div class="la"><input type="checkbox"><label for="">Bom</label></div>
          <div class="la"><input type="checkbox"><label for="">Regular</label></div>
          <div class="la"><input type="checkbox"><label for="">Ruim</label></div>
        </SelectGroup>
      </SelectContent>
    </Select>
    <button class="b">Aplicar</button>
      <button @click="hdlClk" class="la">Gerar relatorio</button>

  </div>

</template>
<style scoped>
.b {
  width: 100%;
  height: 2.5rem;
  margin-top: 10%;
  background-color: #554F48;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.title {
  width: 100%;
  height: 3rem;
  /* font-size: 1.5rem; */
  font-weight: bold;
  margin-bottom: 1rem;
  padding: 1rem .5rem;
  /* text-align: center; */
  color: #554F48;
  border-bottom: 1px solid #E2E8F0;
}

.side {
  width: 100%;
  height: 100vh;
  /* border: 1px solid black; */
  display: flex;
  /* box-shadow: 4px 4px 10px  rgba(0, 0, 0, 0.1) ; */
  border: 1px solid #E2E8F0;
  border-radius: .5rem;
  flex-direction: column;
  margin: 1rem 0;
  padding: 1rem;
}

.fe {
  /* width: 500px ; */
  padding: .5rem;
  color: #554F48;
}

.ai {
  height: 2rem;
}

.line {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: .5rem;
  /* margin-top: .5rem; */
}

.line input {
  width: 60%;
  height: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 8px;
  box-sizing: border-box;
}

.line label {
  width: 40%;
}

.la {
  display: flex;
  width: 100%;
  gap: .5rem;
  justify-content: start;
}

@media screen and (max-width: 1024px) {
  .side {
    width: 100%;
    height: auto;
    margin: 1rem 0;
  }

}
</style>