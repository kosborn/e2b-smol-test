<script>
  import { error } from '$app/stores';
</script>

<main>
  <h1>Error</h1>
  <p>Something went wrong.</p>
  <pre>{@error}</pre>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  h1 {
    color: #ff4136;
  }
  pre {
    background: #f4f4f4;
    padding: 1em;
    overflow: auto;
  }
</style>