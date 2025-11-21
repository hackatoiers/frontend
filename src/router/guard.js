import { useAuth } from '@/stores/auth'
import { useRouter } from 'vue-router'

export async function authGuard(
    to,
    from,
    next
) {
    const auth = useAuth()
    const router = useRouter()

    if (auth.state.user) {
        auth.check().then(() => {
            if (to.meta.requiresAuth && !auth.state.user) {
                router.push('/auth/signin');
            }
            if (to.meta.requiresGuest && auth.state.user) {
                router.push('/');
            }
        });
    } else if (to.meta.requiresAuth) {
        return next('/auth/signin');
    }

    return next();
}