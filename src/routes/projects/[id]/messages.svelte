```svelte
<script lang="ts">
  import { onMount } from 'svelte';
  import { api } from '$lib/api';
  import { user } from '$lib/auth';
  import type { Message } from '$lib/db';

  let messages: Message[] = [];
  let projectId: string;

  onMount(async () => {
    const response = await api.get(`/projects/${projectId}/messages`, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });

    if (response.ok) {
      messages = await response.json();
    }
  });
</script>

<h1>Project Messages</h1>

<ul id="messageList">
  {#each messages as message (message.id)}
    <li>
      <h2>{message.title}</h2>
      <p>{message.content}</p>
    </li>
  {/each}
</ul>
```