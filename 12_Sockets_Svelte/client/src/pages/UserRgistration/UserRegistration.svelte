<script context="module">
  export let value = '';
</script>

<form method="post" action="/api/registerUser">
  <label for="username">Username</label>
  <input
    id="username"
    type="text"
    placeholder="username"
    name="username"
    bind:value
  />
  <button type="submit">Register Now!</button>
</form>
