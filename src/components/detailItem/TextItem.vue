<script setup>
import api from '@/plugins/api';
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps({
  item: {
    type: Object,
    required: false,
    default: () => ({
        categoria: 'Animal',
        subcategoria: 'Ósseo humano',
        name: 'Crânio',
        num: '8647',
        weight: '450g',
        desc: 'Conjunto de crânio humano, composto de 03 peças, de um indivíduo adulto, com fragmento de maxila esquerda com 04 dentes, mandibula com 12 dentes todos com desgaste acentuado. Três inserções numéricas em cada peça (um da coleção Tiburitus e outro do Instituto de Antropologia IA 16).',
        sala: '102',
        location: 'São Francisco do Sul - SC - Brasil'
    })
  }
})

const id = route.params.item_id;

function handleDw() {
    const url = api.defaults.baseURL + `/items/${id}/pdf`;
    window.open(url, '_blank');
}
</script>
<template>
    <div class="container-content">
        <div class="categorias">
            <p>{{ item.sub_type?.material.name }}</p><p> > </p><p>{{ item.sub_type?.name }}</p>
        </div>
        <div class="title-num">
            <p class="title">{{ item.name }}</p>
            <p class="num">N° {{ item.number }}</p>
        </div>
        <div class="weight">
            <p>Peso: {{ item.weight }}g</p>
        </div>
        <div class="desc"><p>{{ item.description }}</p></div>
            <div class="sala">
        <p class="bold">Sala:</p> <p>{{ item.location.room }}</p>
        <p class="bold">Estante:</p> <p>{{ item.location.shelf }}</p>
        <p class="bold">Prateleira:</p> <p>{{ item.location.bookcase }}</p>

    </div>
        <div class="bottom">
        <p @click="handleDw" class="detail">Ver detalhes</p>
        <p class="loc"><img src="/public/map-pin.svg" alt="">{{ item.location.city + ' - ' + item.location.state + ' - ' + item.location.country }}</p>
    </div>

    </div>
</template>
<style scoped>
.bold{
    font-weight: bold;
}
.sala {
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
    font-size: 14px;
}
.container-content {
  width: 100%;
  min-height: 30rem ;
  color: #554F48;
  padding: .5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.categorias {
  display: flex;
  gap: 0.5rem;
  font-size: 14px;
  color: #554F48;
}
.title-num {
  display: flex;
  flex-direction:     ;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
}
.title {
  font-size: 24px;
  font-weight: bold;
}
.num {
    font-size: 14px;
    font-weight: normal;
}
.weight {
    font-size: 14px;
    margin-top: 0.5rem;
}
.desc {
    margin-top: 1rem;
    font-size: 14px;
    text-align: center;
}
.desc p {
    text-align: justify;
}
.bottom {
    margin-top: 1.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.loc {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 14px;
}
.detail {
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
}
</style>
