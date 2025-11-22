import { base64Serializer } from "@/utils/store/serializers/base64";
import { defineStore } from "pinia";
import { ref } from "vue";
import authService from '@/services/auth'
import { useStorage } from '@vueuse/core';

export const useAuth = defineStore("auth", () => {
    const state = {
        user: useStorage("cache_auth_user", null, localStorage, { serializer: base64Serializer() }),
        checked: ref(false)
    }

    async function login(email, password, remember = false) {
        const response = await authService.login(email, password, remember);

        state.user.value = response.data;
        state.checked.value = true;
        return response;
    }

    async function logout() {
        await authService.logout();
        state.user.value = null;
    }

    async function check() {
        if (state.checked.value) {
            return;
        }

        try {
            state.user.value = await authService.me();
        } catch (err) {
            if (err.response?.status === 401) {
                state.user.value = null;
            }
        } finally {
            state.checked.value = true;
        }
    }

    return {
        state,
        login,
        logout,
        check
    }
});