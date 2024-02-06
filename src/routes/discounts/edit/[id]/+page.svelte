<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Error from '$lib/components/Error.svelte';
	import DiscountForm from '$lib/components/forms/DiscountForm.svelte';
	import { getInitialFetchResult } from '$lib/fetch';
	import { useGetDiscount, useEditDiscount } from '$lib/fetch/fetchDiscounts';
	import { FetchStatus } from '$lib/types/Fetch';
	import type { Discount } from '$lib/types/Discount';
	import { onMount } from 'svelte';
	const id: number = Number($page.url.pathname.split('/').pop()) ?? 0;

	const {
		status: statusGetter,
		httpStatus: httpStatusGetter,
		message: messageGetter,
		content: discountGetter
	} = getInitialFetchResult<Discount>();
	const { status, httpStatus, message, content: discount } = getInitialFetchResult<Discount>();

	onMount(async () => {
		useGetDiscount(
			{
				status: statusGetter,
				httpStatus: httpStatusGetter,
				message: messageGetter,
				content: discountGetter
			},
			id
		);
	});

	const onEdit = (event: any) => {
		const data: Discount = event.detail.discount;
		useEditDiscount({ status, httpStatus, message, content: discount }, id, data);
	};

	$: if ($status === FetchStatus.SUCCESS) goto('/discounts');
</script>

<main>
	{#if $status === FetchStatus.ERROR}
		<Error status={$status} httpStatus={$httpStatus} message={$message} />
	{:else}
		<h2 class="text-2xl">Edit discount {id}</h2>
		{#if $discountGetter}
			<DiscountForm discount={$discountGetter} editing on:edit={onEdit} />
		{/if}
	{/if}
</main>
