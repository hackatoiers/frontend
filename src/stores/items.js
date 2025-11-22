import { base64Serializer } from '@/utils/store/serializers/base64'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'
import ItemService from '@/services/items'

export const useItemStore = defineStore('item', () => {
    const state = {
        items: useStorage('cache_items', [], localStorage, { serializer: base64Serializer() }),
        currentItem: ref(null),
        checked: ref(false),
        meta: ref({}),
        search: ref(''),
    }

    const filteredItems = computed(() => {
        if (!state.search.value) return state.items.value
        return state.items.value.filter(item =>
            item.name?.toLowerCase().includes(state.search.value.toLowerCase())
        )
    })

    async function fetchAll(page = 1, perPage = 10) {
        try {
            const response = await ItemService.fetchAll(page, perPage)
            state.items.value = response.data.data
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
            const response = await ItemService.fetchById(id)
            state.currentItem.value = response.data
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function create(data) {
        try {
            const response = await ItemService.create(data)
            await fetchAll()
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function update(data) {
        try {
            const response = await ItemService.update(data)
            await fetchAll()
            return response
        } catch (err) {
            console.error(err)
            return err
        }
    }

    async function remove(id) {
        try {
            const response = await ItemService.delete(id)
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
        filteredItems,
    }
})
