<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Error from '$lib/components/Error.svelte';
	import TicketPreview from '$lib/components/TicketPreview.svelte';
	import { getInitialFetchResult } from '$lib/fetch';
	import { useGetTicket } from '$lib/fetch/fetchTickets';
	import { FetchStatus } from '$lib/types/Fetch';
	import type { Ticket } from '$lib/types/Ticket';
	import { onMount } from 'svelte';
	const id: number = Number($page.url.pathname.split('/').pop()) ?? 0;

	const { status, httpStatus, message, content: ticket } = getInitialFetchResult<Ticket>();

	onMount(async () => {
		useGetTicket(
			{
				status,
				httpStatus,
				message,
				content: ticket
			},
			id
		);
	});
</script>

<main class="w-full">
	{#if $status === FetchStatus.ERROR}
		<Error status={$status} httpStatus={$httpStatus} message={$message} />
	{:else}
		<h2 class="text-2xl">Ticket {id}</h2>
		{#if $ticket}
			<TicketPreview ticket={$ticket} />
		{/if}
	{/if}
</main>
