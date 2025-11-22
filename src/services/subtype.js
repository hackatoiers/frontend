import api from '@/plugins/api'

class SubTypeService {
    async fetchAll(page = 1, perPage = 10) {
        try {
            const response = await api.get(`/material-subtypes`, {
                params: {
                    page,
                    per_page: perPage
                }
            })
            return response
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async fetchById(id) {
        try {
            const response = await api.get(`/material-subtypes/${id}`)
            return response
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async create(data) {
        try {
            const response = await api.post(`/material-subtypes`, data)
            return response
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async update(data) {
        try {
            const { id, ...formData } = data
            const response = await api.put(`/material-subtypes/${id}`, formData)
            return response
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async delete(id) {
        try {
            const response = await api.delete(`/material-subtypes/${id}`)
            return response
        } catch (error) {
            console.error(error)
            return error
        }
    }
}

export default new SubTypeService()
