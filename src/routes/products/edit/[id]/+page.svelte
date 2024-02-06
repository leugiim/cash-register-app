<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Error from '$lib/components/Error.svelte';
	import ProductForm from '$lib/components/forms/ProductForm.svelte';
	import { getInitialFetchResult } from '$lib/fetch';
	import { useGetProduct, useEditProduct } from '$lib/fetch/fetchProducts';
	import { FetchStatus } from '$lib/types/Fetch';
	import type { Product } from '$lib/types/Product';
	import { onMount } from 'svelte';
	const id: string = $page.url.pathname.split('/').pop() ?? '';

	const {
		status: statusGetter,
		httpStatus: httpStatusGetter,
		message: messageGetter,
		content: productGetter
	} = getInitialFetchResult<Product>();
	const { status, httpStatus, message, content: product } = getInitialFetchResult<Product>();

	onMount(async () => {
		useGetProduct(
			{
				status: statusGetter,
				httpStatus: httpStatusGetter,
				message: messageGetter,
				content: productGetter
			},
			id
		);
	});

	const onEdit = (event: any) => {
		const data: Product = event.detail.product;
		useEditProduct({ status, httpStatus, message, content: product }, id, data);
	};

	$: if ($status === FetchStatus.SUCCESS) goto('/products');
</script>

<main>
	{#if $status === FetchStatus.ERROR}
		<Error status={$status} httpStatus={$httpStatus} message={$message} />
	{:else}
		<h2 class="text-2xl">Editando {id}</h2>
		{#if $productGetter}
			<ProductForm product={$productGetter} editing on:edit={onEdit} />
		{/if}
	{/if}
</main>
