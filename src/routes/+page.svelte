<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { getInitialFetchResult } from '$lib/fetch';
	import { useProducts } from '$lib/fetch/fetchProducts';
	import type { Product } from '$lib/types/Product';
	import { onMount } from 'svelte';

	const { status, httpStatus, message, content: products } = getInitialFetchResult<Product[]>();

	onMount(async () => {
		useProducts({ status, httpStatus, message, content: products });
	});
</script>

<main class="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 w-full gap-6 px-8">
	{#each $products ?? [] as product}
		<ProductCard {product} />
	{/each}
</main>
