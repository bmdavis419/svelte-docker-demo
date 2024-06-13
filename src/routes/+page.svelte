<script lang="ts">
	import Incrementor from '$lib/Incrementor.svelte';
	import { counter } from '$lib/demo.svelte';

	let todos = $state([
		{ id: 1, name: 'Buy groceries' },
		{ id: 2, name: 'Do laundry' },
		{ id: 3, name: 'Go to the gym' },
		{ id: 4, name: 'Do the dishes' },
		{ id: 5, name: 'Clean the house' }
	]);

	const { data } = $props();
</script>

<!-- SLOW LOAD TEST -->
<div>Fast Res: {data.instaMessage}</div>
{#await data.message}
	<div>loading slow res...</div>
{:then message}
	<div>Slow Res: {message}</div>
{/await}

<!-- NEW STATE -->
<button onclick={() => counter.inc()}>Count is {counter.count}</button>

<button onclick={() => counter.reset()}>Reset Counter</button>

<Incrementor />

<!-- SNIPPETS -->
{#snippet todo(todoData: {
    name: string;
    id: number
})}
	<div>
		<h2>Todo {todoData.id}</h2>
		<h4>ID: {todoData.id}</h4>
	</div>
{/snippet}

<div>
	{#each todos as todoData}
		{@render todo(todoData)}
	{/each}
</div>
