<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="container h-screen mx-auto m-10 flex items-start justify-center">
	<slot />
</main>
