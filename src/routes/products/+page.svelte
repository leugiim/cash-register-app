<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import { getInitialFetchResult } from '$lib/fetch';
	import { useProducts } from '$lib/fetch/fetchProducts';
	import type { Product } from '$lib/types/Product';
	import { onMount } from 'svelte';

	const { status, httpStatus, message, content: products } = getInitialFetchResult<Product[]>();

	onMount(async () => {
		useProducts({ status, httpStatus, message, content: products });
	});

	const headers = ['id', 'name', 'price'];
</script>

<Table {headers} data={$products} />
