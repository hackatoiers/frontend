import { base64Serializer } from '@/utils/store/serializers/base64'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import MaterialService from '@/services/materials'

export const useMaterialStore = defineStore('material', () => {
    const state = {
        materials: useStorage('cache_materials', [], localStorage, { serializer: base64Serializer() }),
        currentMaterial: ref(null),
        checked: ref(false),
        meta: ref({}),
    }

    async function fetchAll(page = 1, perPage = 10) {
        try {
            const response = await MaterialService.fetchAll(page, perPage)
            state.materials.value = response.data.data
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
            const response = await MaterialService.fetchById(id)
            state.currentMaterial.value = response.data
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function create(data) {
        try {
            const response = await MaterialService.create(data)
            await fetchAll()
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function update(data) {
        try {
            const response = await MaterialService.update(data)
            await fetchAll()
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function remove(id) {
        try {
            const response = await MaterialService.delete(id)
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
