<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: false,
    default: () => ({})
  }
})
</script>
<template>
    <div class="container-content">
        <div class="categorias">
            <p>Animal</p><p> > </p><p>Ósseo humano</p>
        </div>
        <div class="title-num">
            <p class="title">Crânio</p> 
            <p class="num">N° 8647</p>
        </div>
        <div class="weight">
            <p>Peso: 450g</p>
        </div>
        <div class="desc"><p>Conjunto de crânio humano, composto de 03 peças, de um indivíduo adulto, com fragmento de maxila esquerda com 04 dentes, mandibula com 12 dentes todos com desgaste acentuado. Três inserções numéricas em cada peça (um da coleção Tiburitus e outro do Instituto de Antropologia IA 16).</p></div>
            <div class="sala">
        <p class="bold">Sala:</p> <p>102</p>
    </div>
        <div class="bottom">
        <p class="detail">Ver detalhes</p>
        <p class="loc"><img src="/public/map-pin.svg" alt=""> São Francisco do Sul - SC - Brasil</p>
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
  flex-direction: row;
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