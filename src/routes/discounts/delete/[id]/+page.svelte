<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Error from '$lib/components/Error.svelte';
	import { getInitialFetchResult } from '$lib/fetch';
	import { useDeleteDiscount } from '$lib/fetch/fetchDiscounts';
	import { FetchStatus } from '$lib/types/Fetch';
	import type { Discount } from '$lib/types/Discount';
	import { onMount } from 'svelte';
	const id: number = Number($page.url.pathname.split('/').pop()) ?? 0;

	const { status, httpStatus, message, content: discount } = getInitialFetchResult<Discount>();

	onMount(async () => {
		useDeleteDiscount({ status, httpStatus, message, content: discount }, id);
	});

	$: if ($status === FetchStatus.SUCCESS) goto('/discounts');
</script>

<Error status={$status} httpStatus={$httpStatus} message={$message} />
