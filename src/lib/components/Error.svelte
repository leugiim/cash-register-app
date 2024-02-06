<script lang="ts">
	import type { FetchStatus } from '$lib/types/Fetch';

	export let status: FetchStatus;
	export let httpStatus: number | string;
	export let message: string;
</script>

<div class="flex justify-center items-center flex-col">
	<p class="text-9xl mb-6">❗️</p>
	<p class="text-5xl mb-6">{status} {httpStatus}</p>
	<p>{message}</p>
</div>
