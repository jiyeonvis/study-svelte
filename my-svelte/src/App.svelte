<script>
	import { lifecycle, delayRender } from './lifecycle.js'
	import Something from './Something.svelte'
	let done = delayRender();
	lifecycle();
</script>

{#if $done}
<h1>hello lifecycle!</h1>
{/if}

<Something />