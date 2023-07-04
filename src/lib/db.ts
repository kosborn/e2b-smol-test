```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUserById(id: string) {
  return await prisma.user.findUnique({
    where: { id },
  });
}

export async function createProject(data: any) {
  return await prisma.project.create({
    data,
  });
}

export async function createServiceKey(data: any) {
  return await prisma.serviceKey.create({
    data,
  });
}

export async function generateApiKey(data: any) {
  return await prisma.apiKey.create({
    data,
  });
}

export async function trackMessage(data: any) {
  return await prisma.message.create({
    data,
  });
}

export async function getProjectById(id: string) {
  return await prisma.project.findUnique({
    where: { id },
  });
}

export async function getApiKeyById(id: string) {
  return await prisma.apiKey.findUnique({
    where: { id },
  });
}

export async function getServiceKeyById(id: string) {
  return await prisma.serviceKey.findUnique({
    where: { id },
  });
}

export async function getMessagesByProjectId(id: string) {
  return await prisma.message.findMany({
    where: { projectId: id },
  });
}
```