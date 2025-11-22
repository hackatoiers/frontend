import api from '@/plugins/api'

export default new class AuthService {
    async login(email, password, remember = false) {
        try {
            const response = await api.post('/auth/login', { email, password, remember });
            return response.data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    async logout() {
        try {
            await api.post('/auth/logout');
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    }

    async me() {
        try {
            const response = await api.get('/auth/me');
            return response.data.data;
        } catch (error) {
            console.error('Me error:', error);
            throw error;
        }
    }
}