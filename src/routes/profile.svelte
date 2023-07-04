<script lang="ts">
  import { onMount } from 'svelte';
  import { user } from '$lib/auth.ts';

  let userData = {};

  onMount(async () => {
    userData = await user.getProfile();
  });
</script>

<style>
  .profile {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 1em;
  }
</style>

<div class="profile">
  <h1>Your Profile</h1>
  <p><strong>Name:</strong> {userData.name}</p>
  <p><strong>Email:</strong> {userData.email}</p>
  <p><strong>Joined:</strong> {new Date(userData.createdAt).toLocaleDateString()}</p>
</div>