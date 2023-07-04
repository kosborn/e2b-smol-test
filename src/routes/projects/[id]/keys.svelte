```svelte
<script lang="ts">
  import { onMount } from 'svelte';
  import { api } from '$lib/api';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import type { ApiKey } from '$lib/db';

  let projectId: string;
  let keys: ApiKey[] = [];

  $: projectId = $page.params.id;

  onMount(async () => {
    try {
      const response = await api(`/projects/${projectId}/keys`);
      keys = response.keys;
    } catch (error) {
      console.error(error);
    }
  });

  const createKey = async () => {
    try {
      const response = await api(`/projects/${projectId}/keys`, 'POST');
      keys = [...keys, response.key];
    } catch (error) {
      console.error(error);
    }
  };

  const deleteKey = async (keyId: string) => {
    try {
      await api(`/projects/${projectId}/keys/${keyId}`, 'DELETE');
      keys = keys.filter(key => key.id !== keyId);
    } catch (error) {
      console.error(error);
    }
  };
</script>

<h1>API Keys</h1>

<button on:click={createKey}>Create New Key</button>

<ul>
  {#each keys as key (key.id)}
    <li>
      <p>{key.id}</p>
      <button on:click={() => deleteKey(key.id)}>Delete</button>
      <button on:click={() => goto(`/projects/${projectId}/keys/${key.id}`)}>Details</button>
    </li>
  {/each}
</ul>
```