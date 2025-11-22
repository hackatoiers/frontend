import { base64Serializer } from '@/utils/store/serializers/base64'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import LocationService from '@/services/locations'

export const useLocationsStore = defineStore('locations', () => {
    const state = {
        locations: useStorage('cache_locations', [], localStorage, { serializer: base64Serializer() }),
        currentLocations: ref(null),
        checked: ref(false),
        meta: ref({}),
    }

    async function fetchAll(page = 1, perPage = 10) {
        try {
            const response = await LocationService.fetchAll(page, perPage)
            state.locations.value = response.data.data
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
            const response = await LocationService.fetchById(id)
            state.currentLocations.value = response.data
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function create(data) {
        try {
            const response = await LocationService.create(data)
            await fetchAll()
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function update(data) {
        try {
            const response = await LocationService.update(data)
            await fetchAll()
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function remove(id) {
        try {
            const response = await LocationService.delete(id)
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
