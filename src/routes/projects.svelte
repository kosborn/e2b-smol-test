```svelte
<script lang="ts">
  import { onMount } from 'svelte';
  import { user } from '$lib/auth';
  import { getProjects } from '$lib/api';
  import { Project } from '$lib/db';

  let projects: Project[] = [];

  onMount(async () => {
    if (user) {
      projects = await getProjects(user.id);
    }
  });
</script>

<main>
  <h1>Your Projects</h1>
  {#if user}
    <button on:click={() => goto('/projects/new')}>Create New Project</button>
    {#each projects as project (project.id)}
      <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <button on:click={() => goto(`/projects/${project.id}`)}>View Project</button>
      </div>
    {/each}
  {:else}
    <p>Please login to view your projects.</p>
  {/if}
</main>

<style>
  main {
    padding: 1em;
    max-width: 600px;
    margin: 0 auto;
  }
  h1 {
    color: #333;
  }
  button {
    margin-top: 1em;
  }
</style>
```