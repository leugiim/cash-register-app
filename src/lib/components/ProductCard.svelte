<script lang="ts">
	import { addProduct, cart } from '$lib/stores/cart';
	import { type Product } from '$lib/types/Product';
	export let product: Product;

	const addToCart = () => {
		addProduct($cart, product.id ?? '', 1);
	};
</script>

<div class="w-full bg-dark rounded-lg shadow flex justify-between items-center">
	<img class="rounded-l-lg max-h-[200px]" src="/{product.id}.jpg" alt={product.name} />
	<div class="p-5 w-full h-full flex flex-col justify-between">
		<h2 class="text-xl font-semibold tracking-tight text-muted">
			{product.name}
		</h2>
		<div class="flex items-center justify-between gap-10">
			<span class="text-3xl font-bold text-muted">
				${product.price?.toFixed(2)}
			</span>
			<button
				on:click={addToCart}
				class="text-lg text-muted bg-dark hover:brightness-125 focus:ring-4 focus:outline-none font-medium rounded-lg px-4 py-2 text-center"
			>
				ADD
			</button>
		</div>
	</div>
</div>
