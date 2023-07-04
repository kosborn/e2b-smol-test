import { writable } from "svelte/store";
import { User, Project, ServiceKey, ApiKey, Message } from "$lib/db";

export const user = writable<User | null>(null);
export const project = writable<Project | null>(null);
export const serviceKey = writable<ServiceKey | null>(null);
export const apiKey = writable<ApiKey | null>(null);

export async function authenticateUser(username: string, password: string) {
  // Implement authentication logic here
}

export async function createProject(name: string, description: string) {
  // Implement project creation logic here
}

export async function createServiceKey(projectId: string) {
  // Implement service key creation logic here
}

export async function generateApiKey(projectId: string) {
  // Implement API key generation logic here
}

export async function trackMessage(
  projectId: string,
  apiKeyId: string,
  message: string
) {
  // Implement message tracking logic here
}
