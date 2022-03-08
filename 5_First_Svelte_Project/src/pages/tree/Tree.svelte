<script>
  import Apple from './Apple.svelte';
  const apples = ['🍏', '🍎', '🍎', '🍏', '🍏'];

  function pickApple() {
    apples.pop();
    apples = apples;
  }
</script>

<div id="tree">
  <h2>I'm a tree</h2>
  {#each apples as apple}
    <Apple {apple} />
  {/each}
  <p id="emojis" />
</div>
<button on:click={pickApple}>Pick an apple </button>
<div id="trunk" />

<style>
  #tree {
    background-color: green;
    border-radius: 5px;
    border-style: solid;
  }
  #trunk {
    background-color: red;
  }
  #emojis {
    color: green;
  }
</style>
