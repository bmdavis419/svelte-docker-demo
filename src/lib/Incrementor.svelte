<script>
	import { counter } from './demo.svelte';
</script>

<div>
	<label for="incrementor">Increment by: {counter.incrementor}</label>
	<input name="incrementor" type="range" min="1" max="5" bind:value={counter.incrementor} />
</div>
