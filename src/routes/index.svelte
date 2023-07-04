```svelte
<script>
  import { onMount } from 'svelte';
  import { user } from '$lib/auth.ts';
  
  let isAuthenticated = false;

  onMount(async () => {
    isAuthenticated = await user.isAuthenticated();
  });
</script>

<svelte:head>
  <title>Project Manager</title>
</svelte:head>

<main>
  {#if isAuthenticated}
    <h1>Welcome to Project Manager</h1>
    <p>Manage your projects efficiently and effectively.</p>
    <a href="/projects">Go to your projects</a>
  {:else}
    <h1>Welcome to Project Manager</h1>
    <p>You need to login to manage your projects.</p>
    <a href="/login">Login</a>
    <a href="/signup">Sign Up</a>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  a {
    display: block;
    margin-top: 0.5em;
  }
</style>
```