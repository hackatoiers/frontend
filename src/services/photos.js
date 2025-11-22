import api from '@/plugins/api'

class PhotoService {
    async fetchById(id) {
        try {
            const response = await api.get(`/photos/${id}`)
            return response
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async create(data) {
        try {
            const response = await api.post('/photos', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return response
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async delete(id) {
        try {
            const response = await api.delete(`/photos/${id}`)
            return response
        } catch (error) {
            console.error(error)
            return error
        }
    }
}

export default new PhotoService()
