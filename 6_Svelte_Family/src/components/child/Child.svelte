<script>
  export let name;
  export let isGirl = false;
  export let stereotype = '';
  export let handleFamilyMeetingCall;
</script>

<div class:girly={isGirl} class={stereotype || 'beyond-any-stereotype'}>
  <h3 on:click={handleFamilyMeetingCall(name)}>Hi, I am {name}</h3>
</div>

<style>
  div {
    background-color: lightblue;
  }
  .girly {
    background-color: pink;
  }
  .black-sheep {
    background-color: black;
    color: white;
  }
  .bright-kid {
    background-color: yellow;
    color: white;
  }
</style>
