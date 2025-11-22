import { base64Serializer } from '@/utils/store/serializers/base64'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import CollectionService from '@/services/collections'

export const useCollectionStore = defineStore('collection', () => {
    const state = {
        collections: useStorage('cache_collections', [], localStorage, { serializer: base64Serializer() }),
        currentCollection: ref(null),
        checked: ref(false),
        meta: ref({}),
    }

    async function fetchAll(page = 1, perPage = 10) {
        try {
            const response = await CollectionService.fetchAll(page, perPage)
            state.collections.value = response.data.data
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
            const response = await CollectionService.fetchById(id)
            state.currentCollection.value = response.data
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function create(data) {
        try {
            const response = await CollectionService.create(data)
            await fetchAll()
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function update(data) {
        try {
            const response = await CollectionService.update(data)
            await fetchAll()
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function remove(id) {
        try {
            const response = await CollectionService.delete(id)
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
