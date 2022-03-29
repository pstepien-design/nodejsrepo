<script>
  import { onMount } from 'svelte';

	let players = [];

  onMount(async () => {
    const response = await fetch('/players');
		const {data: playersArray} = await response.json();
		players = playersArray;
		console.log(players);
  });
</script>

<main>
	<h1>{JSON.stringify(players)}</h1>
	<h1>{players[0]?.name}</h1>
	<h1>Page content</h1>
</main>
<footer>
  ©
  {new Date().getFullYear()}
  Contact About
</footer>

<style>
  main {
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  footer {
    background-color: lightblue;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
