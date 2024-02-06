<script lang="ts">
	import { onMount } from 'svelte';

	export let headers: string[];
	export let data: any[] | null;
	export let preview: boolean = false;

	let baseUrl: string = '';

	$: body = data?.map((item) => headers.map((header) => item[header])) ?? [];

	onMount(() => {
		baseUrl = window.location.pathname;
	});

	const format = (col: any): string | number => {
		if (typeof col === 'number' && col.toString().split('.')[1]?.length > 2) {
			return col.toFixed(2);
		}
		return col;
	};
</script>

<div class="w-full text-right flex justify-center items-center flex-col">
	{#if !preview}
		<a class="btn ml-auto bg-green-600" href="{baseUrl}/create"> New</a>
	{/if}
	<table class="w-full text-sm text-left mt-6">
		<thead class="text-dark text-xl">
			<tr class="bg-gray-300 rounded">
				{#each headers as header}
					<th class="capitalize p-4">{header}</th>
				{/each}
				<th class="text-right">Actions</th>
			</tr>
		</thead>
		<tbody class="text-lg my-6">
			{#if body.length === 0}
				<tr><td class="text-center pt-8" colspan={headers.length}>The data is empty</td></tr>
			{/if}
			{#each body as row}
				<tr class="odd:bg-gray-50 even:bg-gray-100">
					{#each row as col}
						<td class="p-4">
							{format(col)}
						</td>
					{/each}
					<td class="text-right">
						{#if !preview}
							<a class="btn bg-secondary" href="{baseUrl}/edit/{row[0]}"> Edit</a>
							<a class="btn bg-alternative" href="{baseUrl}/delete/{row[0]}"> Delete</a>
						{:else}
							<a class="btn bg-secondary" href="{baseUrl}/see/{row[0]}"> See</a>
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
