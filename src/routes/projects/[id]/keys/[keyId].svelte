```svelte
<script context="module" lang="ts">
  import { loadApiKey } from '$lib/api';
  import type { ApiKey } from '$lib/db';

  export async function load({ params }) {
    const { id, keyId } = params;
    const apiKey: ApiKey = await loadApiKey(id, keyId);
    return { props: { apiKey } };
  }
</script>

<script lang="ts">
  export let apiKey: ApiKey;
</script>

<main>
  <h1>API Key Details</h1>
  <div>
    <h2>Key ID: {apiKey.id}</h2>
    <p>Created At: {apiKey.createdAt}</p>
    <p>Last Used: {apiKey.lastUsed}</p>
  </div>
</main>
```