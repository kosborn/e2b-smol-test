```typescript
import { getSession } from '$app/stores';
import { authenticateUser } from './lib/auth';

export async function handle({ request, resolve }) {
    const cookies = cookie.parse(request.headers.cookie || '');
    request.locals.user = await authenticateUser(cookies.user);

    const response = await resolve(request);

    return {
        ...response,
        headers: {
            ...response.headers,
            'Set-Cookie': `user=${request.locals.user.id}; Path=/; HttpOnly`
        }
    };
}

export function getSession(request) {
    return {
        user: request.locals.user
    };
}
```