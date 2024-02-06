<script lang="ts">
	import { goto } from '$app/navigation';
	import TicketPreview from '$lib/components/TicketPreview.svelte';
	import { getInitialFetchResult } from '$lib/fetch';
	import { useCreateTicket, usePreviewTicket } from '$lib/fetch/fetchTickets';
	import { cart, cleanCart, getProducts, total } from '$lib/stores/cart';
	import { FetchStatus } from '$lib/types/Fetch';
	import type { Ticket } from '$lib/types/Ticket';
	import { onMount } from 'svelte';

	const { status, httpStatus, message, content: ticket } = getInitialFetchResult<Ticket>();
	const {
		status: statusBuy,
		httpStatus: httpStatusBuy,
		message: messageBuy,
		content: ticketBuy
	} = getInitialFetchResult<Ticket>();

	$: ticketBody = total($cart) > 0 ? getProducts($cart) : null;

	$: if (total($cart) > 0 && ticketBody && ticketBody.productsIds !== '') {
		usePreviewTicket(
			{
				status,
				httpStatus,
				message,
				content: ticket
			},
			ticketBody
		);
	}

	const clean = () => {
		cleanCart();
		goto('/');
	};

	const buy = () => {
		if (ticketBody && ticketBody.productsIds !== '') {
			useCreateTicket(
				{
					status: statusBuy,
					httpStatus: httpStatusBuy,
					message: messageBuy,
					content: ticketBuy
				},
				ticketBody
			);
		}
	};

	$: if ($statusBuy === FetchStatus.SUCCESS) {
		cleanCart();
		goto('/tickets');
	}
</script>

<main class="w-full flex justify-center items-center flex-col">
	<h1 class="text-5xl mb-8">Cart</h1>

	{#if total($cart) <= 0}
		<p class="text-2xl">The cart is empty</p>
	{:else}
		{#if $ticket}
			<TicketPreview ticket={$ticket} editing />
		{/if}

		<div>
			<button class="btn bg-alternative mx-auto mt-10 mr-5" on:click={clean}>CLEAN</button>
			<button class="btn bg-green-600 mx-auto mt-10" on:click={buy}>BUY</button>
		</div>
	{/if}
</main>
