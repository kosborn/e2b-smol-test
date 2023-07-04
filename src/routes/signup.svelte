<script lang="ts">
  import { onMount } from 'svelte';
  import { authenticateUser } from '../lib/auth.ts';

  let email = '';
  let password = '';

  async function signup() {
    try {
      await authenticateUser(email, password);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  }
</script>

<main>
  <h1>Sign Up</h1>
  <form id="signupForm" on:submit|preventDefault={signup}>
    <label for="email">Email</label>
    <input type="email" id="email" bind:value={email} required>

    <label for="password">Password</label>
    <input type="password" id="password" bind:value={password} required>

    <button type="submit">Sign Up</button>
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

  input, button {
    padding: 0.5rem;
  }
</style>