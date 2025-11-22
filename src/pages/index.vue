<script setup>
// import DetailItemAdmin from '@/components/detailItem/DetailItemAdmin.vue';
import HomeSection3 from '@/components/HomeSection3.vue';
// import DetailItemComp from '@/components/detailItem/DetailItemComp.vue';
import HeaderComp from '@/components/header/HeaderComp.vue';
import LineHome from '@/components/LineHome.vue';
import Footer from '@/components/Footer.vue';
// import Card from '@/components/card.vue';
// import { useAuth } from '@/stores/auth';
// import { RouterLink } from 'vue-router';
// const auth = useAuth();
import ClassesComp from '@/components/classes/ClassesComp.vue';
// import CadastroPComp from '@/components/cadastrar-produto/CadastroPComp.vue';
import SectionCards from '@/components/sectionCards.vue';
// import ModalReservaComp from '@/components/modal-reserva/ModalReservaComp.vue';
import Home from '@/components/home/HomeView.vue';
</script>
<template>
    <HeaderComp />
    <Home />
    <!--<DetailItemAdmin/> -->
    <!--<CadastroPComp /> -->
    <!-- <CadastroPComp /> -->
    <!-- <CadastroPComp /> -->
    <!-- <ModalReservaComp :open="true" /> -->
    <!-- <Card /> -->
    <ClassesComp />
    <HomeSection3 />
    <LineHome />
    <SectionCards />
    <!-- <div class="puta"><p>MAIS ACESSADOS</p></div> -->
    <!-- <DetailItemComp /> -->
    <Footer />
    <!-- <p v-if="auth.state.user">Logado como {{ auth.state.user?.email }} <button @click="auth.logout()">Sair</button></p>
    <RouterLink to="/auth/login" v-else>Login</RouterLink> -->
</template>
<style scoped>
.title-cards{
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin: 2rem auto;
}
.puta{
    width: 100%;
    height: 100px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin: 2rem auto 0 auto;
}
/* button, a {
    cursor: pointer;
    background-color: red;
} */
</style>
