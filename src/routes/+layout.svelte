<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="container h-screen mx-auto flex items-center justify-center">
	<slot />
</main>
