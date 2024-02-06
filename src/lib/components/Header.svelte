<script lang="ts">
	import { cart, total } from '$lib/stores/cart';

	$: products = total($cart);
</script>

<nav class="h-[100px] bg-primary text-muted flex items-center justify-end">
	<a href="/" class="mr-auto">Home</a>
	<a href="/products">Products</a>
	<a href="/discounts">Discounts</a>
	<a href="/tickets">Tickets</a>
	<a href="/cart">
		Cart
		<span class="flex rounded-full bg-secondary uppercase px-2 py-1 text-xs font-bold ml-3">
			{products}
		</span>
	</a>
	<a href="/about">About</a>
</nav>

<style>
	a {
		@apply p-6 h-full bg-primary hover:brightness-125 uppercase flex justify-center items-center;
	}
</style>
