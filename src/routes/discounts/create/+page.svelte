<script lang="ts">
	import { goto } from '$app/navigation';
	import Error from '$lib/components/Error.svelte';
	import DiscountForm from '$lib/components/forms/DiscountForm.svelte';
	import { getInitialFetchResult } from '$lib/fetch';
	import { useCreateDiscount } from '$lib/fetch/fetchDiscounts';
	import { FetchStatus } from '$lib/types/Fetch';
	import type { Discount } from '$lib/types/Discount';

	const { status, httpStatus, message, content: discount } = getInitialFetchResult<Discount>();

	const onCreate = (event: any) => {
		const data: Discount = event.detail.discount;
		useCreateDiscount({ status, httpStatus, message, content: discount }, data);
	};

	$: if ($status === FetchStatus.SUCCESS) goto('/discounts');
</script>

<main>
	{#if $status === FetchStatus.ERROR}
		<Error status={$status} httpStatus={$httpStatus} message={$message} />
	{:else}
		<h2 class="text-2xl">Create new discount</h2>
		<DiscountForm on:create={onCreate} />
	{/if}
</main>
