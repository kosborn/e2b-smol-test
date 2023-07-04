```typescript
import { writable } from 'svelte/store';

// Create writable stores for shared variables
export const user = writable(null);
export const project = writable(null);
export const serviceKey = writable(null);
export const apiKey = writable(null);

// Function to generate a random ID
export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Function to validate form inputs
export function validateForm(inputs: any) {
  for (let key in inputs) {
    if (inputs[key] === '') {
      return false;
    }
  }
  return true;
}

// Function to handle form submission
export function handleFormSubmit(event: Event) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  return data;
}
```