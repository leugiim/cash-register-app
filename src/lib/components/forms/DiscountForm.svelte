<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { DiscountStrategy, DiscountStrategies, type Discount } from '$lib/types/Discount';
	import { getInitialFetchResult } from '$lib/fetch';
	import type { Product } from '$lib/types/Product';
	import { useProducts } from '$lib/fetch/fetchProducts';

	export let discount: Discount = {
		id: null,
		productId: null,
		strategy: null,
		quantity: null,
		discount: null
	};
	export let editing: boolean = false;

	const dispatch = createEventDispatcher();
	const { status, httpStatus, message, content: products } = getInitialFetchResult<Product[]>();

	onMount(() => {
		useProducts({ status, httpStatus, message, content: products });
	});

	const onCreate = () => {
		dispatch('create', { discount });
	};
	const onEdit = () => {
		dispatch('edit', { discount });
	};
</script>

<main class="flex justify-center items-center flex-col gap-5 my-5">
	<div class="field">
		<label for="product" class="label"> product: </label>
		<select id="product" class="input" bind:value={discount.productId} required>
			{#each $products ?? [] as product}
				<option value={product.id}>{product.name}</option>
			{/each}
		</select>
	</div>
	<div class="field">
		<label for="strategy" class="label"> strategy: </label>
		<select id="strategy" class="input" bind:value={discount.strategy} required>
			{#each DiscountStrategies as strategy}
				<option value={strategy}>{strategy}</option>
			{/each}
		</select>
	</div>
	<div class="field">
		<label for="quantity" class="label"> quantity: </label>
		<input
			type="text"
			id="quantity"
			class="input"
			placeholder="10.00"
			bind:value={discount.quantity}
			required
		/>
	</div>
	<div class="field">
		<label for="discount" class="label"> discount: </label>
		<input
			type="text"
			id="discount"
			class="input"
			placeholder="10.00"
			bind:value={discount.discount}
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
