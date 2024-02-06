<script lang="ts">
	import { goto } from '$app/navigation';
	import Error from '$lib/components/Error.svelte';
	import ProductForm from '$lib/components/forms/ProductForm.svelte';
	import { getInitialFetchResult } from '$lib/fetch';
	import { useCreateProduct } from '$lib/fetch/fetchProducts';
	import { FetchStatus } from '$lib/types/Fetch';
	import type { Product } from '$lib/types/Product';

	const { status, httpStatus, message, content: product } = getInitialFetchResult<Product>();

	const onCreate = (event: any) => {
		const data: Product = event.detail.product;
		useCreateProduct({ status, httpStatus, message, content: product }, data);
	};

	$: if ($status === FetchStatus.SUCCESS) goto('/products');
</script>

<main>
	{#if $status === FetchStatus.ERROR}
		<Error status={$status} httpStatus={$httpStatus} message={$message} />
	{:else}
		<h2 class="text-2xl">Create new product</h2>
		<ProductForm on:create={onCreate} />
	{/if}
</main>
