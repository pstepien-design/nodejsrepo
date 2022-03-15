<script>
  export let name;
  export let isGirl = false;
  export let stereotype = '';
  export let handleFamilyMeetingCall;
  import { supermarket } from '../../store/supermarket';
  function eatCandy() {
    supermarket.update((storeValue) => {
      if (storeValue.candy > 0) storeValue.candy -= 1;
      return storeValue;
    });
  }
</script>

<div class:girly={isGirl} class={stereotype || 'beyond-any-stereotype'}>
  <h3 on:click={handleFamilyMeetingCall(name)}>Hi, I am {name}</h3>
  <div>Pieces of candy in the store:</div>
  <p>{JSON.stringify($supermarket.candy, null)}</p>
  <button on:click={eatCandy}>Eat candy</button>
</div>

<style>
  div {
    background-color: lightblue;
  }
  .girly, .girly>div {
    background-color: pink;
  }
  .black-sheep, .black-sheep>div {
    background-color: black;
    color: white;
  }
  .bright-kid, .bright-kid>div {
    background-color: yellow;
    color: white;
  }
</style>
