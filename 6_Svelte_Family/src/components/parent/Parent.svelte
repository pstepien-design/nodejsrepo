<script>
  export let name = 'Paweł';
  export let handleFamilyMeetingCall;
</script>

<p class="parent" on:click={handleFamilyMeetingCall(name)}>
  Hi, my name is {name}
</p>

<style>
  .parent {
    user-select: none;
  }
</style>
