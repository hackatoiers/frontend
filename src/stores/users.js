import { base64Serializer } from '@/utils/store/serializers/base64'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import UsersService from '@/services/users'

export const useUsersStore = defineStore('users', () => {
    const state = {
        users: useStorage('cache_users', [], localStorage, { serializer: base64Serializer() }),
        currentUsers: ref(null),
        checked: ref(false),
        meta: ref({}),
    }

    async function fetchAll(page = 1, perPage = 10) {
        try {
            const response = await UsersService.fetchAll(page, perPage)
            state.users.value = response.data.data
            state.meta.value = response.data.meta
            state.checked.value = true
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function fetchById(id) {
        try {
            const response = await UsersService.fetchById(id)
            state.currentUsers.value = response.data
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function create(data) {
        try {
            const response = await UsersService.create(data)
            await fetchAll()
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function update(data) {
        try {
            const response = await UsersService.update(data)
            await fetchAll()
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function remove(id) {
        try {
            const response = await UsersService.delete(id)
            await fetchAll()
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    return {
        state,
        fetchAll,
        fetchById,
        create,
        update,
        remove,
    }
})
