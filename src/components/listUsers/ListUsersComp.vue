<script setup>
import { ref, onMounted } from 'vue';
import { useUsersStore } from '@/stores/users';
const usersStore = useUsersStore();
onMounted(async () => {
    await usersStore.fetchAll();
});
// import SearchInputa from './SearchInputa.vue';

const users = [
    {
        id: 1,
        email: 'Fofuxo@gmail.com',
    },
    {
        id: 2,
        email: 'Fofuxo@gmail.com',
    },
    {
        id: 3,
        email: 'Fofuxo@gmail.com',
    },
    {
        id: 4,
        email: 'Fofuxo@gmail.com',
    },
    {
        id: 5,
        email: 'Fofuxo@gmail.com',
    },
    {
        id: 6,
        email: 'Fofuxo@gmail.com',
    },
    {
        id: 7,
        email: 'Fofuxo@gmail.com',
    },
    {
        id: 8,
        email: 'Fofuxo@gmail.com',
    },
]        
</script>
<template>
<div class="container">
    <p class="text">Usuários</p>
    <div class="line-input">
        <img src="/search.svg" alt="">
        <input type="text" placeholder="Buscar usuário..." v-model="usersStore.state.search">
    </div>
 </div>
    <div class="list">
        <div class="item" v-for="user in usersStore.filteredUsers" :key="user.id">
            <p class="p1">{{ user.name }}</p>
            <div class="line"></div>
            <p class="p2">{{ user.email }}</p>
            <div class="btns">
                <button class="more">ver mais</button>
                <button class="del"><img src="/trash-2.svg" alt=""></button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.p2{
    width: 60%;
    font-weight: lighter;
    height: 100%;
    /* border-right: 2px solid #E2E8F0; */
    padding: 1rem;
}
.line{
    width: 1px;
    height: 4rem;
    background-color: #E2E8F0;
    /* margin: 0 1rem7 */
}
/* span{
    height: 100%;
    width: 5px;
    background-color: #E2E8F0;
    margin: 0 1rem;
} */
.p1{
    font-weight: bold;
    height: 100%;
    /* border-right: 2px solid #E2E8F0; */
    padding: 1rem;
}
.btns{
    display: flex;
    gap: .5rem;
}
.del{
    background-color: #D23F3F;
    border: none;
    cursor: pointer;
    padding: .5rem;
    border-radius: .5rem;
    transition: .3s ease-in-out;
}
.more{
    background-color: #242221;
    color: white;
    border: none;
    padding: .5rem 1rem;
    border-radius: .5rem;
    cursor: pointer;
    transition: .3s ease-in-out;
}
.more:hover{
    background-color: #554F48;
}
.list{
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.item{
    width: 100%;
    height: 4rem;
    flex-wrap: wrap;
    border: 1px solid #E2E8F0;
    border-radius: .5rem;
    /* padding: 1rem; */
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.container {
    width: 50%;
    margin: 3rem auto;
    height: 40px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid #ccc; */
}
.text{
    font-size: 1.2rem;
    font-weight: bold;
}
.line-input {
    width: 90%;
    height: 40px;
    display: flex;
    align-items: center;
    gap: .5rem;
    border: 1px solid #E2E8F0;
    padding: .5rem;
    border-radius: .5rem;
}
.line-input input{
    border: none;
    outline: none;
}
@media screen and (max-width: 1024px) {
    .container{
        width: 90%;
        flex-direction: column;
        height: auto;
        padding: 0;
    }
    .line-input{
        width: 100%;
    }
    .list{
        width: 90%;
    }
    .item{
        height: auto;
    }
    .btns{
        width: 100%;
        margin: auto;
        justify-content: center;
    }
    .more{
        width: 100%;
    }
    .del{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>