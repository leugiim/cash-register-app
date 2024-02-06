<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Error from '$lib/components/Error.svelte';
	import { getInitialFetchResult } from '$lib/fetch';
	import { useDeleteProduct } from '$lib/fetch/fetchProducts';
	import { FetchStatus } from '$lib/types/Fetch';
	import type { Product } from '$lib/types/Product';
	const id: string = $page.url.pathname.split('/').pop() ?? '';

	const { status, httpStatus, message, content: product } = getInitialFetchResult<Product>();

	useDeleteProduct({ status, httpStatus, message, content: product }, id);

	$: if ($status == FetchStatus.SUCCESS) goto('/products');
</script>

<Error status={$status} httpStatus={$httpStatus} message={$message} />
