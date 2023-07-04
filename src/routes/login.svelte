```svelte
<script lang="ts">
  import { onMount } from 'svelte';
  import { authenticateUser } from '../lib/auth.ts';

  let email = '';
  let password = '';

  async function login() {
    try {
      await authenticateUser(email, password);
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  }
</script>

<main>
  <h1>Login</h1>
  <form id="loginForm" on:submit|preventDefault={login}>
    <label for="email">Email</label>
    <input type="email" id="email" bind:value={email} required>

    <label for="password">Password</label>
    <input type="password" id="password" bind:value={password} required>

    <button type="submit">Login</button>
  </form>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    cursor: pointer;
  }
</style>
```