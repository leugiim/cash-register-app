<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Product } from '$lib/types/Product';

	export let product: Product = { id: null, name: null, price: null };
	export let editing: boolean = false;

	const dispatch = createEventDispatcher();

	const onCreate = () => {
		dispatch('create', { product });
	};
	const onEdit = () => {
		dispatch('edit', { product });
	};
</script>

<main class="flex justify-center items-center flex-col gap-5 my-5">
	{#if !editing}
		<div class="field">
			<label for="id" class="label"> id: </label>
			<input type="text" id="id" class="input" placeholder="ID1" bind:value={product.id} required />
		</div>
	{/if}
	<div class="field">
		<label for="name" class="label"> name: </label>
		<input
			type="text"
			id="name"
			class="input"
			placeholder="Product name"
			bind:value={product.name}
			required
		/>
	</div>
	<div class="field">
		<label for="price" class="label"> price: </label>
		<input
			type="text"
			id="price"
			class="input"
			placeholder="10.00"
			bind:value={product.price}
			required
		/>
	</div>
	<div class="field">
		{#if editing}
			<button class="btn bg-secondary w-full" on:click={onEdit}>EDIT</button>
		{:else}
			<button class="btn bg-green-600 w-full" on:click={onCreate}>CREATE</button>
		{/if}
	</div>
</main>
