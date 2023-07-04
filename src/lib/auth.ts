```typescript
import { User } from '../lib/db';
import { getCookie } from './utils';

export async function authenticateUser(req, res, next) {
  const userId = getCookie(req, 'user');
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const user = await User.findUnique({ where: { id: userId } });
  if (!user) {
    return res.status(401).json({ error: 'User not found' });
  }

  req.user = user;
  next();
}
```