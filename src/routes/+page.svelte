<script lang="ts">
	import { getInitialFetchResult } from '$lib/fetch';
	import { useProducts } from '$lib/fetch/fetchProducts';
	import type { Product } from '$lib/types/Product';

	const { status, httpStatus, message, content: products } = getInitialFetchResult<Product[]>();

	useProducts({ status, httpStatus, message, content: products });
</script>

<h1 class="text-2xl text-primary">Text 1</h1>
<h2 class="text-2xl text-secondary">Text 2</h2>
<h2 class="text-2xl text-muted">Text 3</h2>
<h2 class="text-2xl text-light">Text 4</h2>
<h2 class="text-2xl text-alternative">Text 5</h2>
<h2 class="text-2xl text-dark">Text 6</h2>

{#each $products ?? [] as product}
	<div>{product.name}</div>
{/each}
