import api from '@/plugins/api'

class LocationService {
    async fetchAll(page = 1, perPage = 10) {
        try {
            const response = await api.get(`/location`, {
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
            const response = await api.get(`/location/${id}`)
            return response
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async create(data) {
        try {
            const response = await api.post(`/location`, data)
            return response
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async update(data) {
        try {
            const { id, ...formData } = data
            const response = await api.put(`/location/${id}`, formData)
            return response
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async delete(id) {
        try {
            const response = await api.delete(`/location/${id}`)
            return response
        } catch (error) {
            console.error(error)
            return error
        }
    }
}

export default new LocationService()
