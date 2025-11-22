import { base64Serializer } from '@/utils/store/serializers/base64'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import SubTypeService from '@/services/subtype'

export const useSubTypeStore = defineStore('subtype', () => {
    const state = {
        subtype: useStorage('cache_subtypes', [], localStorage, { serializer: base64Serializer() }),
        currentSubtype: ref(null),
        checked: ref(false),
        meta: ref({}),
    }

    async function fetchAll(page = 1, perPage = 10) {
        try {
            const response = await SubTypeService.fetchAll(page, perPage)
            state.subtype.value = response.data.data
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
            const response = await SubTypeService.fetchById(id)
            state.currentSubtype.value = response.data
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function create(data) {
        try {
            const response = await SubTypeService.create(data)
            await fetchAll()
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function update(data) {
        try {
            const response = await SubTypeService.update(data)
            await fetchAll()
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function remove(id) {
        try {
            const response = await SubTypeService.delete(id)
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
