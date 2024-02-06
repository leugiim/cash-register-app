<script lang="ts">
	import { addProduct, cart } from '$lib/stores/cart';
	import type { Ticket } from '$lib/types/Ticket';

	export let ticket: Ticket;
	export let editing: boolean = false;

	const removeOne = (productId: string) => {
		addProduct($cart, productId, -1);
	};

	const addOne = (productId: string) => {
		addProduct($cart, productId, 1);
	};
</script>

<table class="w-full text-center text-sm mt-6">
	<thead>
		<tr class="text-xl">
			<th>Quantity</th>
			<th>Name</th>
			<th>Price per unit</th>
			<th>Price</th>
			<th>Discount</th>
			<th>Total price</th>
		</tr>
	</thead>
	<tbody>
		{#each ticket.ticketDetails as ticketDetails}
			<tr>
				<td>
					{#if editing}
						<button on:click={() => removeOne(ticketDetails.productId)} class="btn bg-alternative">
							-
						</button>
						{ticketDetails.quantity}
						<button on:click={() => addOne(ticketDetails.productId)} class="btn bg-secondary">
							+
						</button>
					{:else}
						{ticketDetails.quantity}
					{/if}
				</td>
				<td>{ticketDetails.productName}</td>
				<td>{ticketDetails.pricePerUnit.toFixed(2)}$</td>
				<td>{ticketDetails.price.toFixed(2)}$</td>
				<td>-{ticketDetails.discount.toFixed(2)}$</td>
				<td>{ticketDetails.totalPrice.toFixed(2)}$</td>
			</tr>
		{/each}
		<tr class="text-xl">
			<th colspan="3" class="text-right pr-3 pt-6">Total:</th>
			<td class="pt-6">{ticket.price.toFixed(2)}$</td>
			<td class="pt-6">-{ticket.discount.toFixed(2)}$</td>
			<th class="pt-6">{ticket.totalPrice.toFixed(2)}$</th>
		</tr>
	</tbody>
</table>
