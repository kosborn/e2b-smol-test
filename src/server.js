```javascript
import { createServer } from 'http';
import { Server } from 'socket.io';
import { PrismaClient } from '@prisma/client';
import { authenticateUser } from './lib/auth';
import { createProject, createServiceKey, generateApiKey, trackMessage } from './lib/api';

const prisma = new PrismaClient();
const server = createServer();
const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('USER_AUTHENTICATED', async (data) => {
    const user = await authenticateUser(data, prisma);
    socket.emit('USER_AUTHENTICATED', user);
  });

  socket.on('PROJECT_CREATED', async (data) => {
    const project = await createProject(data, prisma);
    socket.emit('PROJECT_CREATED', project);
  });

  socket.on('SERVICE_KEY_CREATED', async (data) => {
    const serviceKey = await createServiceKey(data, prisma);
    socket.emit('SERVICE_KEY_CREATED', serviceKey);
  });

  socket.on('API_KEY_GENERATED', async (data) => {
    const apiKey = await generateApiKey(data, prisma);
    socket.emit('API_KEY_GENERATED', apiKey);
  });

  socket.on('MESSAGE_TRACKED', async (data) => {
    const message = await trackMessage(data, prisma);
    socket.emit('MESSAGE_TRACKED', message);
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```