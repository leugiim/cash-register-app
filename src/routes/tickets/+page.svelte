<script lang="ts">
	import Table from '$lib/components/Table.svelte';
	import { getInitialFetchResult } from '$lib/fetch';
	import { useTickets } from '$lib/fetch/fetchTickets';
	import type { Ticket } from '$lib/types/Ticket';
	import { onMount } from 'svelte';

	const { status, httpStatus, message, content: tickets } = getInitialFetchResult<Ticket[]>();

	onMount(async () => {
		useTickets({ status, httpStatus, message, content: tickets });
	});

	const headers = ['id', 'createdAt', 'price', 'discount', 'totalPrice'];
</script>

<Table {headers} data={$tickets} preview />
