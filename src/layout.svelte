<script>
  import { user } from '$lib/auth.ts';
  import { goto } from '$app/navigation';
</script>

<nav>
  <ul>
    <li><a href="/">Home</a></li>
    {#if $user}
      <li><a href="/profile">Profile</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/logout" on:click|preventDefault={async () => {
        await logout();
        goto('/login');
      }}>Logout</a></li>
    {:else}
      <li><a href="/login">Login</a></li>
      <li><a href="/signup">Signup</a></li>
    {/if}
  </ul>
</nav>

<slot />