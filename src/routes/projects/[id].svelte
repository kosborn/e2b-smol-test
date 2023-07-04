```svelte
<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { api } from '$lib/api';
  import type { Project } from '$lib/db';
  import { user } from '$lib/auth';

  let project: Project | null = null;
  let id: string;

  const fetchProject = async () => {
    const response = await api(`/projects/${id}`, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });

    if (response.ok) {
      project = await response.json();
    } else {
      goto('/projects');
    }
  };

  onMount(fetchProject);
</script>

<svelte:head>
  <title>{project?.name} - Project Manager</title>
</svelte:head>

{#if project}
  <h1>{project.name}</h1>
  <p>{project.description}</p>
  <a href="keys">Manage API Keys</a>
  <a href="messages">View Messages</a>
{:else}
  <p>Loading project...</p>
{/if}
```