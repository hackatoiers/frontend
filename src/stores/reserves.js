import { base64Serializer } from '@/utils/store/serializers/base64'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'
import ReserveService from '@/services/reserves'

export const useReserveStore = defineStore('reserve', () => {
    const state = {
        reserves: useStorage('cache_reserves', [], localStorage, { serializer: base64Serializer() }),
        currentReserve: ref(null),
        checked: ref(false),
        meta: ref({}),
        search: ref(''),
    }

    const filteredReserves = computed(() => {
            if (!state.search.value) return state.reserves.value
            return state.reserves.value.filter(reserve =>
                reserve.user_email?.toLowerCase().includes(state.search.value.toLowerCase())
            )
        })
    async function fetchAll(page = 1, perPage = 10) {
        try {
            const response = await ReserveService.fetchAll(page, perPage)
            state.reserves.value = response.data.data
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
            const response = await ReserveService.fetchById(id)
            state.currentReserve.value = response.data
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function create(data) {
        try {
            const response = await ReserveService.create(data)
            await fetchAll()
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function update(data) {
        try {
            const response = await ReserveService.update(data)
            await fetchAll()
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function remove(id) {
        try {
            const response = await ReserveService.delete(id)
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
        filteredReserves,
    }
})
