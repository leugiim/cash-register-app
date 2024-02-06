<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import { getInitialFetchResult } from '$lib/fetch';
	import { useDiscounts } from '$lib/fetch/fetchDiscounts';
	import type { Discount } from '$lib/types/Discount';
	import { onMount } from 'svelte';

	const { status, httpStatus, message, content: discounts } = getInitialFetchResult<Discount[]>();

	onMount(async () => {
		useDiscounts({ status, httpStatus, message, content: discounts });
	});

	const headers = ['id', 'productId', 'strategy', 'quantity', 'discount'];
</script>

<Table {headers} data={$discounts} />
